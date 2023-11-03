/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Config from './config.json'
import { useNavigate } from "react-router-dom";
import locales, { UILangType, timeAgos } from "./locale";
export const config = Config;

export interface ContextDataType {
	darkTheme: boolean
	lang: string
	cookie: string
	loading: boolean
	emailSent: number
	connected: boolean
	auth: AuthType | null
	sellerProfile: FreelancerProfileType | null
	account: AccountType | null
	service: ServiceType | null
}

const initiContextData = {
	darkTheme: true,
	lang: 'en-US',
	cookie: '',
	loading: false,
	connected: false,
	emailSent: 0,
	auth: null,
	sellerProfile: null,
	account: null,
	service: null,
} as ContextDataType

interface ContextType extends ContextDataType {
	L: UILangType
	en: UILangType
	countries: Array<{ key: string, label: any, icon: string }>
	T(key: string, args?: { [key: string]: string | number } | string | number): string
	update(attrib: Partial<ContextDataType>): void
	getError(code: number | string, args?: { [key: string]: string | number } | string | number): string
	getLocation(location: Partial<LocationType>, format?: 'simple'): string
	timeAgo(time: number): string
	showLoading(show: boolean): void
	setCookie(extra?: Partial<ContextDataType>): void
	logout(extra?: Partial<ContextDataType>): void
}

const Context = React.createContext<ContextType>(null!);

const getStore = (state: any) => {
	try {
		const buf = window.localStorage.getItem(config.appId);
		if (buf) {
			const json = JSON.parse(buf);
			for (let k in json) {
				if (state[k] !== undefined) {
					state[k] = json[k];
				}
			}
		}
		if (state.cookie === '') state.cookie = uuidv4()
		state.loading = false;
	} catch (err) {
		console.log(err);
	}
	return state;
}

const setStore = (state: any) => {
	window.localStorage.setItem(config.appId, JSON.stringify(state))
}

const setDocumentCookie = () => {
	const cookie = uuidv4();
	document.cookie = `${config.appId}=${cookie}; path=/; sameSite=true; expires=${new Date(+new Date() + 7 * 86400000).toUTCString()}`;
	return cookie;
}

export const Provider = ({ children }: any) => {
	const navigate = useNavigate()
	const [data, setData] = React.useState<ContextDataType>(getStore(initiContextData));

	const en = locales['en-US'];

	const L = locales[data.lang] || en;

	const update = (attrib: Partial<ContextDataType>) => {
		const _data = { ...data, ...attrib }
		setData(_data)
		setStore(_data)
	}

	// const getError = (code:number, args?:{[key:string]:string|number}|string|number) => T("error."+code, args)

	const T = (key: string, args?: { [key: string]: string | number } | string | number): string => {
		let x = key.split('.');
		let v = L as any
		for (let k of x) {
			if (v[k] === undefined) {
				// throw new Error('Undefined lang key[' + key + ']');
				return ''
			} else {
				v = v[k];
			}
		}
		let text = v;
		if (typeof args === 'string' || typeof args === 'number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else if (args) {
			for (let k in args) text = text.replace(new RegExp('{' + k + '}', 'g'), String(args[k]))
		}
		return text
	}

	const getError = (code: number | string, args?: { [key: string]: string | number } | string | number | null): string => {
		if (typeof code === 'string') return code;
		let text = L.error[code] || locales['en-US'].error[code]
		if (text === undefined) throw new Error('Undefined lang key[' + code + ']')
		if (typeof args === 'string' || typeof args === 'number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else if (!!args) {
			for (let k in args) text = text.replace(new RegExp('{' + k + '}', 'g'), String(args[k]))
		}
		return text
	}

	const getLocation = (location: Partial<LocationType>, format?: 'simple') => {
		const addrs = [] as string[];
		const { district, city, state, country } = location;
		if (!!country) {
			if (!!district) addrs.push(district);
			if (!!city) addrs.push(city);
			if (!!state) {
				if (city !== state) addrs.push(state);
			}
			addrs.push(T('countries.' + country));
			return addrs.join(', ')
		}
		return ''
	}

	const timeAgo = (time: number): string => {
		if (time < 1e12) time *= 1000
		return timeAgos[data.lang]?.format(time)
	}

	const setCookie = (extra?: Partial<ContextDataType>) => {
		const cookie = setDocumentCookie()
		update({ cookie, ...extra })
	}

	const logout = (extra?: Partial<ContextDataType>) => {
		setCookie({ account: null, ...extra })
		navigate('/')
	}

	const showLoading = (show: boolean) => update({ loading: show })
	const [countries] = React.useState(Object.keys(en.countries).map(i => ({ key: i, label: T('countries.' + i), icon: `https://storage.Rickroll.io/flag/${i.toLowerCase()}.svg` })))
	return <Context.Provider value={{ ...data, countries, en, L, T, timeAgo, setCookie, getLocation, getError, logout, showLoading, update }}>{children}</Context.Provider>
};

export default Context;

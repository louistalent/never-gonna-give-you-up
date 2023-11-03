
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import de from 'javascript-time-ago/locale/de.json'
import fr from 'javascript-time-ago/locale/fr.json'
import es from 'javascript-time-ago/locale/es.json'
import pt from 'javascript-time-ago/locale/pt.json'
import zh from 'javascript-time-ago/locale/zh.json'

import enUS from './locales/en-US.json'
import deDE from './locales/de-DE.json'
import frFR from './locales/fr-FR.json'
import esES from './locales/es-ES.json'
import ptPT from './locales/pt-PT.json'
import zhCN from './locales/zh-CN.json'

export interface UILangType {
	lang: string,
	category:  {
		[rootkey: string]: {
			id: number
			label: string
			desc: string
			img: string
			children: {
				[key: string]: {
					id: number
					label: string
					desc: string
					type?: Array<{
						label: string[]
						meta: string[]
					}>|string[]
					scope?: string[]
					extra?: string[]
				}
			}
		}
	},
	categoryMeta: {
		[rootkey: string]: {
			label: string
			prompt: string
			multi?: number
			values?: string[]
			other?: boolean
		}
	}
	countries: {[countryCode: string]: string}
	languages: {[code: string]: {lang: string, dialect: string, country: string}}
	languageProficiency: string[]
	monthname: string[]
	timezones: Array<string[]>
	
	// certifications: {[index: string]: {symbol: string}}
	// fiats: {[key: string]: string}
	// timezones: {[key: string]: string}

	error: {[code: string]: string}
}

const locales = {
	"en-US": enUS,
	// "de-DE": deDE,
	// "fr-FR": frFR,
	// "es-ES": esES,
	// "pt-PT": ptPT,
	// "zh-CN": zhCN,
} as {[lang: string]: UILangType};

TimeAgo.addLocale(en)
TimeAgo.addLocale(de)
TimeAgo.addLocale(fr)
TimeAgo.addLocale(es)
TimeAgo.addLocale(pt)
TimeAgo.addLocale(zh)

export const timeAgos = {
	"en-US": new TimeAgo('en'),
	"de-DE": new TimeAgo('de'),
	"fr-FR": new TimeAgo('fr'),
	"es-ES": new TimeAgo('es'),
	"pt-PT": new TimeAgo('pt'),
	"zh-CN": new TimeAgo('zh'),
} as {[key:string]:any}

export default locales;
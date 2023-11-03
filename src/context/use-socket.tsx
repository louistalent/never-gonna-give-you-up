import React from "react";
import useWebSocket from 'react-use-websocket';
import config from './config.json'
import Context from ".";
import { useNavigate } from "react-router-dom";

const fns = {} as {
	[id: string]: (response: ServerResponse) => Promise<void>
}
// export let connected = false;

const useSocket = () => {
	const navigate = useNavigate();
	const global = React.useContext(Context);
	// const [connected, setConnected] = React.useState(false);

	const { sendJsonMessage } = useWebSocket(config.api + '/' + config.appId + ':' + global.cookie, {
		shouldReconnect: (closeEvent) => true,
		onOpen: (e: WebSocketEventMap['open']) => {
			global.update({ connected: true })
			console.log("socket connected")
		},
		onClose: (e: WebSocketEventMap['close']) => {
			global.update({ connected: false })
			console.log("socket disconnected");
		},
		onMessage: async (e: WebSocketEventMap['message']) => {
			try {
				if (typeof e.data === "string") {
					const { jsonrpc, id, result, error } = JSON.parse(decodeURI(e.data))
					if (jsonrpc === "2.0" && typeof fns[id] === "function") {
						await fns[id]({ result, error })
					}
				}
			} catch (error) {

			}
		},
		onError: (e: WebSocketEventMap['error']) => {
			global.update({ connected: false })
			console.log("socket error")
		},
		reconnectAttempts: 1000,
		reconnectInterval: 5000,
		retryOnError: true,
		share: true
	})

	return {
		sendSocket: (method: string, ...params: Array<any>): Promise<ServerResponse> => {
			if (!global.connected) return Promise.resolve({ error: 10001 });
			return new Promise(resolve => {
				// const id = [+new Date(), Math.round(Math.random()*1e6)].join('')
				// const timer = setTimeout(()=>{
				// 	resolve({error: 10001});
				// 	delete fns[id];
				// }, 60000)
				// fns[id] = async (response) => {
				// 	if (response.error===30000) {
				// 		global.update({account: null, loading: false});
				// 		navigate('/login');
				// 	} else {
				// 		resolve(response);
				// 	}
				// 	delete fns[id];
				// 	clearTimeout(timer);
				// }
				// sendJsonMessage({
				// 	jsonrpc: "2.0",
				// 	method,
				// 	params: params || [],
				// 	id
				// });
			});
		},
		...global
	};
}

export default useSocket
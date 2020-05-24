import { handlers } from './handlers'

const receiver: any = {}

receiver.receive = (action: any) => {
	const handler = handlers[action.type]
	if (handler) {
		handler(action.payload)
	}
}

export { receiver }
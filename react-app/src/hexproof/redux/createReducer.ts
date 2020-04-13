export function createReducer(initialState: any, handlers: any) {
	return function reducer(state = initialState, action: any = {}) {
		const handler = handlers[action.type]
		return handler ? handler(state, action.payload, action) : state
	}
}
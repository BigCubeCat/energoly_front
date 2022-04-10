import {UserActionType} from "../action-types";
import {Action} from "../actions/user"

const initialState = {};

const reducer = (state = initialState, action: Action): object => {
	switch (action.type) {
		case UserActionType.LOGIN:
			return {
				...state,
				user: {}  // TODO - обращение к API
			}
		case UserActionType.LOGOUT:
			return {
				user: {}
			}
		case UserActionType.LOGOUT_ALL:
			return {
				user: {}
			}
		case UserActionType.REGISTER:
			return {
				user: {} // TODO
			}
		default:
			return state
	}
}

export default reducer
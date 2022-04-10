import {Dispatch} from "redux"
import {UserActionType} from "../action-types"
import {LoginData, RegisterData} from "../const";
import {Action} from "../actions/user"

export const LoginUser = (login_data: LoginData) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: UserActionType.LOGIN,
			payload: login_data
		})
	}
}

export const RegisterUser = (register_data: RegisterData) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: UserActionType.REGISTER,
			payload: register_data
		})
	}
}

export const LogoutUser = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: UserActionType.LOGOUT,
		})
	}
}
export const LogoutAllUser = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: UserActionType.LOGOUT_ALL,
		})
	}
}
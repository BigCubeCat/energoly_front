import { UserActionType } from "../action-types"
import { LoginData, RegisterData } from "../const";

interface LoginAction {
	type: UserActionType.LOGIN,
	payload: LoginData
}

interface RegisterAction {
	type: UserActionType.REGISTER,
	payload: RegisterData
}

interface LogoutAction {
	type: UserActionType.LOGOUT
}

interface LogoutAllAction {
	type: UserActionType.LOGOUT_ALL
}

export type Action = LoginAction | RegisterAction | LogoutAction | LogoutAllAction

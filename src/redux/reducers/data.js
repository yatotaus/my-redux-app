import * as type from '../types';

const initialState = {
	data: {},
	error: null,
	loading: false,
	success: false,
}

export default function data(state = initialState, action) {
	switch (action.type) {
		case type.GET_DATA_REQUESTED:
			return {
				...state,
				loading: true,
			}
		case type.GET_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				loading: false,
				success: true,
			}
		case type.GET_DATA_FAILED:
			return {
				...state,
				error: action.message,
				loading: false,
			}
		default:
			return state;
	}
}
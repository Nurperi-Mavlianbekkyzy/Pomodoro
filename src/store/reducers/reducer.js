import {CHANGE} from "../actions/actions";
import { CHECK, TIMES } from "../actionType/actionType";


let inState = {
    change: "caral",
	times:{
		pomofocus: 25, 
		shortBreak:5, 
		longBreak: 10,
		auto: false,
		autoBreak: false,
		Interval:1,
	},
	interval:1,
	second:1,
	
}
export const myPomo = (state = inState, action) => {
	switch (action.type) {
case CHANGE:
		return{
			...state,
			change: action.color
		}
	case TIMES:
		return{
			...state,
			times: action.payload
		}
	case CHECK:
		return{
			...state,
			second: action.payload
		}
	default: return state;

	}

	
};



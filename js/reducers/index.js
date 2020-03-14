import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
	articles: []
};

// use concat, slice, or the spread operator for arrays
// use Object.assign or object spread of objects

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload)
		});
	}
	return state;
}

export default rootReducer;

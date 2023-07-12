
const ADD_ITEM = "ADD_ITEM"

export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    }
}

const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case ADD_ITEM:
            return { ...nextState, [action.itemId]: { id: action.itemId, count: 1 } };
        default:
            return nextState;

    }
}

export default cartReducer;

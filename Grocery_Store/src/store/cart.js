
const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
const SUBTRACT_ITEM = "SUBTRACT_ITEM"
const CHANGE_ITEM = "CHANGE_ITEM"

export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    }

}
export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

export const subtractItem = (itemId) => {
    return {
        type: SUBTRACT_ITEM,
        itemId
    }
}

const cartReducer = (state = {}, action) => {
    const nextState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case ADD_ITEM:
            if (action.itemId in nextState) {
                nextState[action.itemId].count += 1
                return nextState;
            } else {
                return { ...nextState, [action.itemId]: { id: action.itemId, count: 1 } };
            }
        case REMOVE_ITEM:
            delete nextState[action.itemId];
            return nextState;
        case SUBTRACT_ITEM:
            nextState[action.itemId].count -= 1
        default:
            return nextState;

    }
}

export default cartReducer;

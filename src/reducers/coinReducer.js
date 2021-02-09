const initialState = {
    coin: []
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST':
            return {
                ...state,
                coin: action.payload.coin
            }
        default:
            return {
                ...state
            }
    }
}

export default coinReducer;
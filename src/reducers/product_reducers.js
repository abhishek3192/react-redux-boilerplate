export default function productsReducer(state = '', action) {
    switch (action.type) {
        case 'updateProduct':
            return action.payload;
        default:
            return state;
    }
}
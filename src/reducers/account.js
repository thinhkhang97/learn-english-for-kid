const initState = null;

export const account = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return action.account;
        default: return state;
    }
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "Axios_start":
            return { ...state, loading: false, data: '' ,  }
        case "Axios_succes":
            return { ...state, loading: false, data: action.payload,data_secont: '' }
        case "Axions_error":
            return { ...state, loading: true, error: action.payload }
        default:
            return state
    }
}
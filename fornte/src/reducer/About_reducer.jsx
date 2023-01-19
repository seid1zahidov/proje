export const reducer = (state , action) => {
    switch (action.type) {
        case "Axios-Start":
            return {...state , loading: false  }
        case "Axios-contuniue":
            return{...state , loading: false , data: action.payload }
        case "Axios_error":
            return{...state , loading: true , error: action.payload}
        default:
            return  state;
    }
}
import products from '../products.json';


//reducer
const loggerReducer = (state = products, action) => {
    switch(action.type){
        case "ADDTOCART":
            return state;
        default: return state;
    }
}

export default loggerReducer;
const initState = {
    user : {},
    cards : []
}
  
const dashboardReducer = (state = initState, action) => {
    switch(action.type){

        case 'GET_CARDS':
            console.log('Get cards ',action.cards);
            return {
                ...state,
                cards: action.cards
            };
            
        default:
            return state
    }
};
  
export default dashboardReducer;
  
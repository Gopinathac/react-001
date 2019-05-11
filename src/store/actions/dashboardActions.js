export const getCards = () => {

    return (dispatch, getState) => {

        const store = getState();
        const bearer = 'Bearer '+store.auth.token;

        // make async call to database
        fetch('http://localhost:3000/api/getCards', {
            method: 'GET',
            mode: "cors", // no-cors, cors, *same-origin
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then( data => {
            console.log('data ', data)
            dispatch({ type: 'GET_CARDS', cards : data.cards});
        });
    }

};
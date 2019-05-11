export const signIn = (credentials) => {
    return (dispatch, getState) => {

        console.log('credentials',credentials);

        fetch('http://localhost:3000/auth/login', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {

            //store JWT Token to browser session storage 
            //If you use localStorage instead of sessionStorage, then this w/   
            //persisted across tabs and new windows.
            //sessionStorage = persisted only in current tab
            sessionStorage.setItem('jwtToken', data.token);

            dispatch({ type: 'LOGIN_SUCCESS', data : data });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}


export const updateToken = () => {
    return (dispatch, getState) => {
        const token = sessionStorage.getItem('jwtToken') ? sessionStorage.getItem('jwtToken') : null;
        console.log('token ',token);
        dispatch({ type: 'UPDATE_TOKEN', data : token });
    }
}


export const signOut = () => {
    return (dispatch, getState) => {

        sessionStorage.removeItem('jwtToken') ;
        dispatch({ type: 'SIGNOUT_SUCCESS' });
    }
}
 
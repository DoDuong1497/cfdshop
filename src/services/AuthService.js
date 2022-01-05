const AuthService = {
    login(data){
        return fetch('http://cfd-reactjs.herokuapp.com/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json)
        
                
    }
}

export default AuthService
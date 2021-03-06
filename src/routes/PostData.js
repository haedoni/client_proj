export function PostData(type, userData) {
    let BaseURL = 'http://192.168.35.187:8080/';
    
    return new Promise((resolve, reject) =>{
    fetch(BaseURL+type, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((res) => {
        resolve(res);
    })
    .catch((error) => {
       reject(error);
    });
    
    });
    }
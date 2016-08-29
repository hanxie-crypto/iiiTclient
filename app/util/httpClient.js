


const httpClient = {
    //post请求
    post: function(url, data) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(url, fetchOptions)
            .then((response) => response.text());
            
    },
    get: function(url, data, callback) {
        return fetch(url)
            .then((response) => response.text());
    },
    //Key
    key: ''
}

module.exports = httpClient;
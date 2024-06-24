class Ajax {
    static request(method, url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(JSON.stringify(data));
    }

    static get(url, callback) {
        this.request('GET', url, null, callback);
    }

    static post(url, data, callback) {
        this.request('POST', url, data, callback);
    }
}

module.exports = Ajax;

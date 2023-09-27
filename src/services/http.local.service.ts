async function _makeFetchRequest(url, method, data = {}) {
    const options: any = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // if (Boolean(token)) {
    //     options.headers = { ...options.headers, Authorization: 'Bearer ' + token };
    // }

    if (data && method !== 'GET' && method !== 'DELETE') {
        options.body = JSON.stringify(data);
    }

    const fetchedData = await fetch(url, options);
    return await fetchedData.json();
}


const HttpLocal = {
    get: (endpoint: string) => _makeFetchRequest(endpoint, 'GET'),
    post: (endpoint: string, data: any) => _makeFetchRequest(endpoint, 'POST', data),
    put: (endpoint: string, data: any) => _makeFetchRequest(endpoint, 'PUT', data),
    delete: (endpoint: string) => _makeFetchRequest(endpoint, 'DELETE'),
};

export default HttpLocal;

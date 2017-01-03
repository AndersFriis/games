function nintendoAPIService($resource) {
    const api = {
        nintendo: $resource('/api/nintendo/:id/',
            // maps a .id on our object to the url above
            { id: '@id' },
            {
            // Method PUT (Update, replace) is used because viewsets 
            // does not provide PUT, Viewsets only Provide list and create
                update: {
                    method: 'PUT', 
                },
            }),
    };

    return api;
}

export default nintendoAPIService;
fetch("./data.json")
    // fetches a response object
    .then(res => res.json())
    .then(data =>
        // here, data is the actual usable JS object
         console.log(data));

// if data was static, we could also export the array in data.json
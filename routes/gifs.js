const axios = require("axios");
var express = require('express');
var router = express.Router();
const APIKey= "iPX1KmpFqxwHMM4kVsXVG03mjczoRSbP";
/* GET weather by location. */
router.get('/:keyword', async function(req, res, next) {
    const url= `https://api.giphy.com/v1/gifs/search`;
    const params= {
            q: req.params.keyword,
            api_key: APIKey,
            limit:5
        }
    try {
        const response = await axios.get(url, { params });
        console.log(response.data);
        res.json(response.data).status(200);   
    } catch (error) {
        console.error('Error:', error);
    }  
    
});

module.exports = router;
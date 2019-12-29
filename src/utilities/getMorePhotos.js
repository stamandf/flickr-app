// import  { FLICKRMETHOD, KEY, FORMAT  } from './flickrConstants';
const axios = require('axios');


const fetchMorePhotos = ( searchText, searchPage ) => {
    const key = '&api_key=44779de00e72e9ec8ffbf165bc0f6ca6';
    const flickrMethod = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    const format = '&format=json&nojsoncallback=1';
    let text = '&text=' + searchText;
    let page = '&page=' + searchPage
    let req_url = FLICKRMETHOD + KEY + text + page + FORMAT;

    axios.get(req_url)
        .then(function (response) {
            // handle success
            console.log("AXIOS=",response);
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log("AXIOS=", error);
        })
        .finally(function () {
            // always executed
            console.log('AXIOS=We did it?!');
        });
    
}
module.exports.fetchMorePhotos = fetchMorePhotos;
//format: 
// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=44779de00e72e9ec8ffbf165bc0f6ca6&text=sunset&page=3&format=json&nojsoncallback=1
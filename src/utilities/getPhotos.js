const request = require('request');

const fetchPhotos = (srchtext, srchpage, callback) => {
    const key = '&api_key=44779de00e72e9ec8ffbf165bc0f6ca6';
    const flickrMethod = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    const format = '&format=json&nojsoncallback=1';
    let text = '&text=' + srchtext;
    let page = '&page=' + srchpage;
    

    let req_url = flickrMethod + key + text + page + format;
    console.log('text=', text);
    console.log('req_url=', req_url);
    request ({
        url: req_url,
        json:true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                total: body.photos.total,
                photo: body.photos.photo
            });
        } else {
            callback('Unable to fetch photos.')
            }
    });


}

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=44779de00e72e9ec8ffbf165bc0f6ca6&text=sunset&format=json&nojsoncallback=1
// URL: https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=44779de00e72e9ec8ffbf165bc0f6ca6&text=sunset+cat&format=json&nojsoncallback=1

module.exports.fetchPhotos = fetchPhotos;
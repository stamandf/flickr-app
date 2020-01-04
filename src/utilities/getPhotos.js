import { KEY, FLICKRMETHOD, FORMAT } from './flickrConstants';
const request = require('request');


const fetchPhotos = (srchtext, srchpage, callback) => {
    let text = '&text=' + srchtext;
    let page = '&page=' + srchpage;

    // Build the flickr method flickr.photos.search request URL
    let req_url = FLICKRMETHOD + KEY + text + page + FORMAT;


    request ({
        url: req_url,
        json:true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                page: body.photos.page,
                total: body.photos.total,
                photo: body.photos.photo
            });
        } else {
            callback('Unable to fetch photos.')
            }
    });


}
export default fetchPhotos
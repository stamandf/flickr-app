import { KEY, FLICKRMETHOD, FORMAT } from './flickrConstants';
// const flickr = require('./flickrConstants');
const request = require('request');

// console.log('Flickr constants are:', flickr.KEY, flickr.FLICKRMETHOD, flickr.FORMAT);

const fetchPhotos = (srchtext, srchpage, callback) => {
    // const key = '&api_key=44779de00e72e9ec8ffbf165bc0f6ca6';
    // const flickrMethod = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    // const format = '&format=json&nojsoncallback=1';
    let text = '&text=' + srchtext;
    let page = '&page=' + srchpage;

    // The flickr method flickr.photos.search request URL
    // let req_url = flickrMethod + key + text + page + format;
    // let req_url = flickr.FLICKRMETHOD + flickr.KEY + text + page + flickr.FORMAT;
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
// module.exports.fetchPhotos = fetchPhotos;
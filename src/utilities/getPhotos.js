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
            // console.log("body.photos=",body.photos); //TRACE
            // console.log("body.photo array=",body.photos.photo); //TRACE
            // console.log("body.photo array[0]=",body.photos.photo[0]); //TRACE
            // console.log("body.photo array[0].server=",body.photos.photo[0].server); //TRACE
            // let newPhoto = body.photos.photo.filter(item => item.server !== "0"); //TEST
            body.photos.photo = body.photos.photo.filter(item => item.server !== "0"); //Filter out broken links: Remove all server= 0;
            // console.log("new photo", newPhoto);  //TRACE

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
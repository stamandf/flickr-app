const KEY = '&api_key=44779de00e72e9ec8ffbf165bc0f6ca6';
const FLICKRMETHOD = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
const FORMAT = '&format=json&nojsoncallback=1';

console.log(`KEY=${KEY}, FLICKRMETHOD=${FLICKRMETHOD}, FORMAT=${FORMAT}`);

// module.exports = { KEY,FLICKRMETHOD, FORMAT }
export { KEY, FLICKRMETHOD, FORMAT }
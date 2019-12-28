import React from 'react';


export default class Photos extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             keywords: this.props.keywords,
             total: this.props.total,
             photos: this.props.photos
        }
        this.displayPhotos = this.displayPhotos.bind(this);
    }
    displayPhotos() {
        
        console.log("Keywords1=", this.state.keywords);

        
    }
    render() {
        // The URL takes the following format:
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
        this.displayPhotos();
        console.log("PHOTOS state=", this.state)
        // const photoList = this.state.photos.map(item => (
        //     //format each item into url in abot format
        //     // <Photo />
        // ));
        return (
            <div>
                <h2>Photos</h2>
                Return each photo in special format

                
            </div>
        );
    }

}
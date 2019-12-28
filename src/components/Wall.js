import React from 'react'
import SearchForm from './SearchForm';
import Photo from './Photo';

export default class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            listPhotos: []
        }
    
        this.addKeyword = this.addKeyword.bind(this);
        this.addPhotos = this.addPhotos.bind(this);
    }

    addKeyword(words)  {
        this.setState({ keywords: words });
    }
    addPhotos(words,total, photos)  {
        // this.setState({ listPhotos: photos });
        this.setState({
            keywords: words,
            total: total,
            listPhotos: photos
        })
    }
    render() {
        console.log("this state=", this.state);
        const photoList = this.state.listPhotos.map(item => (
            //format each item into url in about format
            // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            <Photo
                farm={item.farm}
                server={item.server}
                id={item.id}
                secret={item.secret}
            />
        ));
        return (
            <div className="container">
                <div className="search">
                <SearchForm  addPhotos={this.addPhotos}/>
                </div>
                {/* {this.state.total} results */}
                <div className="gallery">
                {photoList}
                
                <br/>
               
                
                </div>
               

            </div>

        );

    }
}
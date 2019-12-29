import React from 'react'
import SearchForm from './SearchForm';
import Photo from './Photo';
import Gallery from './Gallery';
import Container from './Container';
import Search from './Search';

export default class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            total: 0,
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
                key={item.id}
                farm={item.farm}
                server={item.server}
                id={item.id}
                secret={item.secret}
            />
        ));
        // this.state.listPhotos.map(item => console.log("Item=", item));
        photoList.map(item => console.log("photoList Item=", item));

        return (
            <Container>
            {/* <div className="search"> */}
            <Search>
                <SearchForm  addPhotos={this.addPhotos}/>
            </Search>
                
            {/* </div> */}
                {/* {this.state.total} results */}
                {/* <div className="gallery"> */}
                <Gallery>
                 {photoList}
                </Gallery>
            </Container>
                
                
                
               


        );

    }
}
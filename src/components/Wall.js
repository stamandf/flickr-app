import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import SearchPhotos from './SearchPhotos';
import Photo from './Photo';
import Gallery from './Gallery';
import Container from './Container';
import Search from './Search';
import photo from '../utilities/getPhotos';

export default class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            total: 0,
            listPhotos: [],
            hasMore: true
        }
    
        this.addKeyword = this.addKeyword.bind(this);
        this.addPhotos = this.addPhotos.bind(this);
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    addKeyword(words)  {
        this.setState({ keywords: words });
    }
    addPhotos(words,total, photos)  {
        this.setState({
            keywords: words,
            total: total,
            listPhotos: photos
        })
    }
    fetchMoreData() {
        let photosFound = [];
        if (this.state.listPhotos.length >= this.state.total) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            photo.fetchPhotos(this.state.keywords, 1, (errorMessage, results) => {
                if(errorMessage) {
                    console.log(errorMessage);
                } else {
                    photosFound = results;
                    console.log('PhotosFound:',photosFound); //TRACE
                    console.log('Results:',photosFound.total); //TRACE
                    console.log('Results:',photosFound.photo); //TRACE
                    this.setState({
                        listPhotos: this.state.listPhotos.concat(photosFound.photo)
                    })
                    
                    //reset form
                    // this.setState({ text: ''}); 
                    // this.text.blur();
                    
                    //relocate
                    // this.props.history.push(`/#/${newKeywords}`);
                    
                    // Photo Source URLs:
                    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
                }
            });
            
        })
    }

    render() {
        console.log("Wall this state=", this.state);
        console.log("the total= ", this.state.total);
        console.log("Array length= ", this.state.listPhotos.length);

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
                <Search>
                    <SearchPhotos  addPhotos={this.addPhotos}/>
                </Search>
                {/* <Gallery>
                    {photoList}
                </Gallery> */}
                <InfiniteScroll
                    dataLength={photoList.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    height={800}
                    endMessage={
                        <p>THE END.</p>
                    }
                >
                    <Gallery>
                        {photoList}
                    </Gallery>
                </InfiniteScroll>
            </Container>
                
                
                
               


        );

    }
}
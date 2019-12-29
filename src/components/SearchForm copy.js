import React from 'react';
import photo from '../utilities/getPhotos';
import getKeyWords from '../utilities/buildSrchTerm';
// import svgSprite from '../img/sprite.svg';

let photosFound = [];
// let photoUrl = '';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        let newKeywords = getKeyWords(this.state.text);
        console.log("KeyWords = ", newKeywords);
        // this.props.addKeyword(newKeywords);
        this.setState({ text: ''});
        this.text.blur();
        //get photos with input keywords
        photo.fetchPhotos(newKeywords, (errorMessage, results) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                photosFound = results;
                console.log('PhotosFound:',photosFound); //TRACE
                console.log('Results:',photosFound.total); //TRACE
                console.log('Results:',photosFound.photo); //TRACE
                // this.props.addPhotos(photosFound.photo);
                this.props.addPhotos(newKeywords, photosFound.total, photosFound.photo); //return search results
                
                //reset form
                this.setState({ text: ''}); 
                this.text.blur();
                
                
                // Photo Source URLs:
                // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            }

        });


        // alert(`You are searching for pictures with: ${newKeywords}`);
        // this.setState({ text:'' });
    }
    
    render() {
        return (
            <div>
                <form className="search" onSubmit={this.handleSubmit}>
                    <input className="search__input"
                        type='text'
                        id='text'
                        name='text'
                        ref={input => {
                            this.text = input;
                        }}
                        placeholder='Search photos'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    {/* <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref={`${svgSprite}#{icon-magnifying-glass}`} />
                        </svg>
                    </button> */}
                </form>
            </div>
        );
    }
        
}
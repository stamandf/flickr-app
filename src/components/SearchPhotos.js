import React from 'react';
import { withRouter } from 'react-router-dom';
import photo from '../utilities/getPhotos';
import getKeyWords from '../utilities/buildSrchTerm';
import MagnifyingGlass from './InfinitScrollDots';

let photosFound = [];
// let photoUrl = ''
class SearchPhotos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        };
        console.log("SearchPhotos props= ", this.props);
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
        photo.fetchPhotos(newKeywords, 1, (errorMessage, results) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                photosFound = results;
                console.log('PAGE:',photosFound.page); //TRACE
                console.log('TOTAL:',photosFound.total); //TRACE
                // console.log('PhotosFound:',photosFound); //TRACE
                // console.log('Results:',photosFound.photo); //TRACE
                this.props.addPhotos(newKeywords, photosFound.page, photosFound.total, photosFound.photo); //return search results
                
                //reset form
                this.setState({ text: ''}); 
                this.text.blur();
                
                //relocate
                this.props.history.push(`/#/${newKeywords}`);
                
                // Photo Source URLs:
                // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            }
        });
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
                </form>
            </div>
        );
    }
        
}
export default withRouter(SearchPhotos);
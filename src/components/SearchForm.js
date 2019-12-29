import React from 'react';
import { withRouter } from 'react-router-dom';
import getKeyWords from '../utilities/buildSrchTerm';
// import svgSprite from '../img/sprite.svg';


class SearchForm extends React.Component {
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
        
        //reset form
        this.setState({ text: ''}); 
        this.text.blur();
        
        this.props.history.push(`/${newKeywords}`);
       
        
       

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
                    
                </form>
            </div>
        );
    }
        
}
export default withRouter(SearchForm);
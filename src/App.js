import React from 'react';
import Wall from './components/Wall';
import './styles/styles.scss'
// import { makeStyles } from '@material-ui/core/styles';

// import Photos from './getPhotos';  
// import { Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import seedColors from './seedColors';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>
          <div>
            <Wall/>
          </div>
            {/* <div>
            <img src="https://farm66.staticflickr.com/65535/49255444951_d00df4eeff.jpg" alt="Sunset 1"></img>
            </div> */}
                
      </div>
      
       
       
      
          
      )}
  }
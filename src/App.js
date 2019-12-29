import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={Wall}/> */}
          <Route exact path='/' render={() => <Wall />} />
        </Switch>
            
         
                
      </div>
      
       
       
      
          
      )}
  }
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wall from './components/Wall';
// import SearchForm from './components/SearchForm';
// import SearchPhotos from './components/SearchPhotos';
// import NotFound from './components/NotFound';

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
      keywords: '',
      total: 0,
      listPhotos: []
    }
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
    return (
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={Wall}/> */}
          <Route exact path='/' render={() => <Wall />} />
          {/* <Route exact path='/' render={() => <SearchForm />} /> */}
          <Route exact path='/#/:keyword' render={routeProps => <Wall {...routeProps}/>} />
          {/* <Route exact path='/:keyword' render={routeProps => <Wall {...routeProps}/>} /> */}
        </Switch>
            
         
                
      </div>
      
       
       
      
          
      )}
  }
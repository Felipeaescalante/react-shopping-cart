import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Landing from './components/Landing';


function App() {
  return (

    <div>
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />

      </React.Fragment>
    </div>
  )
}
export default App;

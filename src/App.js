// import logo from './logo.svg';
import {
  Home,
  IronManGiphy,
  SearchYourGiphy 
} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/iron-man-giphy">
          <IronManGiphy />
        </Route>
        <Route path="/search-your-giphy">
          <SearchYourGiphy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App

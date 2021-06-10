import './App.css';
import About from './Components/About'
import Home from './Components/Home'
import Profiles from './Components/Profiles'
import Nav from './Components/Nav'
import ProfilePicture from './Components/ProfileImage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Profiles" component={Profiles}/>
          <Route exact path="/profiles/:id/profile-image" component={ProfilePicture} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

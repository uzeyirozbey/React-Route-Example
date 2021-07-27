import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Link, NavLink, Redirect, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import News from "./Components/News";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import Hata from "./Components/Error";
// const Home = () => {
//   return (<h1> Home Page</h1>)
// };

// const Contact = () => {
//   return (<h1> Contact Page</h1>)
// };

// const News = ({ match }) => {
//   return (<h1> News Page { match.params.id }</h1>)
// };

// const Profile = () => {
//   return (<h1> Profil sayfası : Hoşgeldin Cemşit</h1>)
// }
// const Hata = () => {
//   return (<h1> Sayfa bulunamadı!! </h1>)
// }


class App extends Component {
  state = {
    loggedIn: false
  };
 
  Login = () => {
    this.setState(prevState => ({
      loggedIn : !prevState.loggedIn
    }))
  }

  render(){
    return (
      <Router>
       <div>
        <NavLink activeStyle = {{color :'red' }} exact to="/">         Home</NavLink> <br/>
        <NavLink activeStyle = {{color :'red' }} exact to="/Contact">  Contact</NavLink> <br/>
        <NavLink activeStyle = {{color :'red' }} exact to="/News/2">   News</NavLink> <br/>
        <NavLink activeStyle = {{color :'red' }} exact to="/Profile">  Profile </NavLink> <br/>
        <Switch>
        <Route path='/'         exact  strict component = { Home }></Route>
        <Route path='/contact'  exact  strict component = { Contact }></Route>
        <Route path='/news/:id' exact  strict component = { News }></Route>
        <Route path='/Profile'  
               exact 
               strict 
               render = { () => ( this.state.loggedIn ? (<Profile/>) : ( <Redirect to="/" />)
               )}></Route>
        <Route component={Hata} />
        </Switch>
       
        <br/>
        <input 
          type    = "button"
          onClick = { this.Login } 
          value   = { this.state.loggedIn ?  'Logout' : 'Login'}/> 
        <br/>
       </div>
      </Router>
    );
  } 
}

export default App;

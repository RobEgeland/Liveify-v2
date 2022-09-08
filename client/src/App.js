import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/Home';
import {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/current-user")
    .then((r) => {
      if(r.ok){
        r.json().then((data) => {
          setCurrentUser(data)
          setLoggedIn(true)
        })
      }else {
        r.text().then(error => {
            throw new Error(error)
        })
    }
    })
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path={"/signup"}><SignUp setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/login"}><LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/"}><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

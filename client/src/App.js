import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Artists from './components/Artists';
import ArtistDetails from './components/ArtistDetails';
import NewConcert from './components/NewConcert';
import UserProfile from './components/UserProfile';
import {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [artists, setArtists] = useState([])

  useEffect(() => {
    setCurrentUser()
    fetch("/current-user")
    .then((r) => {
      if(r.ok){
        r.json().then((data) => {
          console.log(data)
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
  useEffect(() => {
    fetch('/artists')
    .then(r => r.json())
    .then(data => setArtists(data))
}, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path={"/artists/:id"}><ArtistDetails /></Route>
          <Route path={"/artists"}><Artists artists={artists} setArtists={setArtists} /></Route>
          <Route path={"/new-concert"}>{ currentUser ? <NewConcert currentUser={currentUser} artists={artists} /> : <h1>Login/SignUp to create a concert</h1>}</Route>
          <Route path={"/signup"}><SignUp setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/my-profile"}><UserProfile /></Route>
          <Route path={"/login"}><LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/"}><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

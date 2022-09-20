import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Artists from './components/Artists';
import ArtistDetails from './components/ArtistDetails';
import NewArtist from './components/NewArtist';
import NewConcert from './components/NewConcert';
import UserProfile from './components/UserProfile';
import UpdateConcert from './components/UpdateConcert';
import {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [artists, setArtists] = useState([])
  const [concerts, setConcerts] = useState([])

  useEffect(() => {
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
  useEffect(() => {
    fetch('/concerts')
    .then((r) => r.json())
    .then((data) => setConcerts(data))
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path={"/artists/:id"}><ArtistDetails /></Route>
          <Route path={"/artists"}><Artists artists={artists} setArtists={setArtists} /></Route>
          <Route path={"/new-artist"}><NewArtist /></Route>
          <Route path={"/new-concert"}>{ currentUser ? <NewConcert currentUser={currentUser} artists={artists} /> : <h1>Login/SignUp to create a concert</h1>}</Route>
          <Route path={"/concerts/:id"}><UpdateConcert artists={artists} /></Route>
          <Route path={"/signup"}><SignUp setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/my-profile"}>{ currentUser ? <UserProfile setConcerts={setConcerts} currentUser={currentUser} concerts={concerts} /> : <h1>Login/SignUp to view this page</h1>}</Route>
          <Route path={"/login"}><LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/"}><Home concerts={concerts} /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

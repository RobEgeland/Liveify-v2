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
import {BrowserRouter, Route, Routes} from "react-router-dom"

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

  function addConcert(newConcert) {
    setConcerts({
      ...concerts,
      newConcert
    })
  }
 

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          {/* <Route path={"/artists/:id"}><ArtistDetails /></Route> */}
          <Route path={"/artists/:id"} element={<ArtistDetails />}/>
          <Route path={"/artists"} element={artists ? <Artists artists={artists} setArtists={setArtists} /> : null} />
          <Route path={"/new-artist"} element={<NewArtist setArtists={setArtists} artists={artists} />}/>
          <Route path={"/new-concert"} element={currentUser ? <NewConcert concerts={concerts} setConcerts={setConcerts} currentUser={currentUser} artists={artists} /> : <h1>Login/SignUp to create a concert</h1>} />
          <Route path={"/concerts/:id"} element={<UpdateConcert artists={artists} concerts={concerts} setConcerts={setConcerts} />}/>
          <Route path={"/signup"} element={<SignUp setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />}/>
          <Route path={"/my-profile"} element={currentUser ? <UserProfile setConcerts={setConcerts} currentUser={currentUser} concerts={concerts} /> : <h1>Login/SignUp to view this page</h1>}/>
          <Route path={"/login"} element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />}/>
          <Route path={"/"} element={<Home concerts={concerts} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

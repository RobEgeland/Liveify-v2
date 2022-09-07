import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    fetch("/hello")
    .then((r) => r.json())
    .then((data) => setCount(data.count))
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route path={"/signup"}><SignUp /></Route>
          <Route path={"/login"}><LogIn setCurrentUser={setCurrentUser} /></Route>
          <Route path={"/"}>
            <h1>Page count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

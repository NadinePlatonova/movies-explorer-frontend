import React from 'react';
import { Redirect, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import MenuPage from '../MenuPage/MenuPage';
import * as mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const pagesWithoutHeader = [
    "/signin",
    "/signup",
    "/not-found",
  ];

  const pagesWithoutFooter = [
    "/signin",
    "/signup",
    "/profile",
    "/not-found",
  ];

  const [isMenuPageOpened, setIsPageMenuOpened] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  function handleBurgerMenu() {
    setIsPageMenuOpened(true);
  }

  function closeBurgerMenu() {
    setIsPageMenuOpened(false);
  }

  function onRegister(data) {
    mainApi.register(data)
      .then(() => {
        onLogin(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onLogin(data) {
    mainApi.login(data)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const checkAuthStatus = React.useCallback(() => {
    mainApi.getContent()
      .then(() => setLoggedIn(true))
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus]);

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data)
      .then(res => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSignOut() {
    mainApi.signout()
    setLoggedIn(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {useRouteMatch(pagesWithoutHeader) ? null : 
        (<Header 
          onBurgerMenu={handleBurgerMenu}
          loggedIn={loggedIn}
        />)
        }

        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/movies">
            <Movies
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies 
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
            />
          </Route>
          <Route path="/signin">
            {loggedIn
            ? <Redirect to="/movies" />
            :
            <Login
            onLogin={onLogin}
            />
            }
          </Route>
          <Route path="/signup">
            {loggedIn
            ? <Redirect to="/movies" />
            :
            <Register
            onRegister={onRegister}
            />
            }
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
          {/* <Route path="*">
            <Redirect to="/not-found" />
          </Route> */}
        </Switch>
        {useRouteMatch(pagesWithoutFooter) ? null : 
        (<Footer />)
        }
        <MenuPage isOpen={isMenuPageOpened} onClose={closeBurgerMenu}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

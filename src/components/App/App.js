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
        checkToken()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const checkToken = React.useCallback(() => {
    mainApi.getContent()
      .then(res => {
        setLoggedIn(res != null)
        setCurrentUser(res)
        history.push('/movies')
      })
      .catch((err) => {
        console.log(err);
      })
  }, [history]);

  React.useEffect(() => {
    checkToken()
  }, [checkToken]);

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
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
            />
          </Route>
          <Route exact path="/signin">
            <Login
              onLogin={onLogin}
              checkToken={checkToken}
            />
          </Route>
          <Route exact path="/signup">
            <Register
              onRegister={onRegister}
            />
          </Route>
          <Route exact path="/not-found">
            <PageNotFound />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
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

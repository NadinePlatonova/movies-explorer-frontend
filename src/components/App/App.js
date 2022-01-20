import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
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

  function handleBurgerMenu() {
    setIsPageMenuOpened(true);
  }

  function closeBurgerMenu() {
    setIsPageMenuOpened(false);
  }

  return (
    <div className="App">
      {useRouteMatch(pagesWithoutHeader) ? null : 
      (<Header onBurgerMenu={handleBurgerMenu}/>)
      }

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
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
  );
}

export default App;

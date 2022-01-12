import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

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

  return (
    <div className="App">
      {useRouteMatch(pagesWithoutHeader) ? null : 
      (<Header />)
      }

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/not-found">
          <PageNotFound />
        </Route>
      </Switch>
      {useRouteMatch(pagesWithoutFooter) ? null : 
      (<Footer />)
      }
    </div>
  );
}

export default App;

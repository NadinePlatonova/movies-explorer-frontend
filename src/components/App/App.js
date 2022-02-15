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
import * as moviesApi from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { filterMoviesSearch, filterSearchByDuration } from '../../utils/filterMoviesSearch';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useWindowSize } from '../../hooks/useWindowSize';
import { setCardsRender } from '../../utils/cardsRender';
import { profileMessages, SERVER_ERROR_MSG, registrationMessages} from '../../utils/constants';

function App() {
  const pagesWithoutHeader = [
    "/signin",
    "/signup",
  ];

  const pagesWithoutFooter = [
    "/signin",
    "/signup",
    "/profile",
  ];

  const [isMenuPageOpened, setIsPageMenuOpened] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [localData, setLocalData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkboxStatus')) || false);
  const [isSavedMoviesChecked, setIsSavedMoviesChecked] = React.useState(false);
  const [cardsRendering, setCardsRendering] = React.useState({ total: 12, add: 3 });
  const [foundMovies, setFoundMovies] = React.useState(localStorage.getItem('filtered') ? JSON.parse(localStorage.getItem('filtered')) : []);
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);
  const [notFoundSavedMovies, setNotFoundSavedMovies] = React.useState(false);
  const [formSubmitMessage, setFormSubmitMessage] = React.useState('');
  const [keyword, setKeyword] = React.useState(localStorage.getItem('searchText') || '');
  const [savedMoviesKeyword, setSavedMoviesKeyword] = React.useState('');
  const history = useHistory();
  const { width } = useWindowSize();

  const resetFormMessages = () => {
    setFormSubmitMessage('');
  }

  function handleBurgerMenu() {
    setIsPageMenuOpened(true);
  }

  function closeBurgerMenu() {
    setIsPageMenuOpened(false);
  }

  const checkAuthStatus = React.useCallback(() => {
    mainApi.getContent()
      .then(() => {
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  React.useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  function onRegister(data) {
    mainApi.register(data)
      .then(() => {
        onLogin(data);
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setFormSubmitMessage(registrationMessages.BAD_REQUEST_MSG);
            break;
          case 409:
            setFormSubmitMessage(registrationMessages.CONFLICT_MSG);
            break;
          default:
            setFormSubmitMessage(SERVER_ERROR_MSG);
        }
      })
  }

  function onLogin(data) {
    mainApi.login(data)
      .then(() => {
        setLoggedIn(true)
        history.push("/movies")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data)
      .then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        setCurrentUser(res);
      })
      .then(() => {
        setFormSubmitMessage(profileMessages.SUCCESS_MSG);
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setFormSubmitMessage(profileMessages.CONFLICT_MSG);
            break;
          default:
            setFormSubmitMessage(profileMessages.BAD_REQUEST_MSG);
        }
      })
  }

  function handleSignOut() {
    mainApi.signout()
    .then(() => {
      setLoggedIn(false);
      localStorage.removeItem('filtered');
      localStorage.removeItem('searchText');
      localStorage.removeItem('checkboxStatus')
      setFoundMovies([]);
      setKeyword('');
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleSearchInputChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSavedMoviesInputChange = (e) => {
    setSavedMoviesKeyword(e.target.value);
  }

  function handleSearchSubmit(search) {
    const filteredMovies = filterMoviesSearch(search.movie, isChecked, localData);
    localStorage.setItem('searchText', search.movie);
    localStorage.setItem('filtered', JSON.stringify(filteredMovies));
    
    if (filteredMovies.length === 0) {
      setNotFoundMovies(true);
    } else {
        setNotFoundMovies(false);
      }
    
    // const checkboxStatus = (movie) => {
    //   if (filteredMovies && movie.duration <= 40) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    // localStorage.setItem('checkboxStatus', JSON.stringify(checkboxStatus));

    setMovies(filteredMovies);
    setKeyword(search.movie);
    setFoundMovies(filteredMovies.slice(0, cardsRendering.total))
  }

  function toggleCheckboxStatus(e) {
    const checked = e.target.checked
    localStorage.setItem('checkboxStatus', checked);
    if (!checked) {
      const shortMovies = movies.filter(filterSearchByDuration);
      setIsChecked(true);
      setMovies(shortMovies);
      setFoundMovies(shortMovies.slice(0, cardsRendering.total))
    } else {
      setIsChecked(false);
      const prevState = JSON.parse(localStorage.getItem('filtered'));
      setMovies(prevState);
      setFoundMovies(prevState.slice(0, cardsRendering.total))
    }
  };

  const handleShowMoreMovies = (index, limit) => {
    const newMovies = movies.slice(0, index + limit);
    setFoundMovies(newMovies); 
  };

  function handleSavedMoviesSearchSubmit(search) {
      const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      const filteredSavedMovies = filterMoviesSearch(search.movie, isSavedMoviesChecked, allSavedMovies);
      localStorage.setItem('savedMoviesSearchText', search.movie);
      localStorage.setItem('savedFilter', JSON.stringify(filteredSavedMovies));

      if (filteredSavedMovies.length === 0) {
        setNotFoundSavedMovies(true);
      } else {
        setNotFoundSavedMovies(false);
      }
      setSavedMoviesKeyword(search.movie);
      setSavedMovies(filteredSavedMovies);
  }

  function toggleSavedMoviesCheckboxStatus() {
    if (!isSavedMoviesChecked) {
      const shortMovies = savedMovies.filter(filterSearchByDuration);
      setIsSavedMoviesChecked(true);
      localStorage.setItem('savedFilter', JSON.stringify(savedMovies));
      setSavedMovies(shortMovies);
    } else {
      setIsSavedMoviesChecked(false);
      const prevState = JSON.parse(localStorage.getItem('savedFilter'));
      setSavedMovies(prevState);
    }
  }

  const toggleMovieStatus = (movie) => {
    const isLiked = savedMovies.some((i) =>
      i.movieId === movie.id ? true : false
    )

    if (isLiked) {
      handleDeleteMovie(movie.id)
    } else {
      handleSaveMovie(movie)
    }
  }

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((res) => {
        const toBeSavedMovies = savedMovies.concat([res]);
        localStorage.setItem('savedMovies', JSON.stringify(toBeSavedMovies));
        setSavedMovies(toBeSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDeleteMovie = (movieId) => {
    const toDeleteMovie = savedMovies.find((movie) => movie.movieId === movieId)
    if (toDeleteMovie === undefined) return;
    mainApi
      .deleteMovie(toDeleteMovie._id)
      .then(() => {
        const filteredMovies = savedMovies.filter((item) => item._id !== toDeleteMovie._id)
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
        setSavedMovies(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovies = () => {
    mainApi
      .getMovies()
      .then((res) => {
        const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        const ownerSavedMovies = res.filter((c) => c.owner === savedCurrentUser._id)
        localStorage.setItem('savedMovies', JSON.stringify(ownerSavedMovies));
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    if (loggedIn) {
      const localUserData = localStorage.getItem('currentUser');
      const localMoviesData = localStorage.getItem('movies');
      const localSavedMoviesData = localStorage.getItem('savedMovies');

      if (!localUserData) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem('currentUser', JSON.stringify(res));
            setCurrentUser(res);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        setCurrentUser(JSON.parse(localUserData));
      };
      if (!localMoviesData) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
            const allMovies = JSON.parse(localStorage.getItem('movies'));
            setLocalData(allMovies);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        setLocalData(JSON.parse(localMoviesData));
      };
      if (!localSavedMoviesData) {
        getMovies()
      } else {
        setSavedMovies(JSON.parse(localSavedMoviesData));
      };
    }
  }, [loggedIn]);

  React.useEffect(() => {
    setCardsRendering(setCardsRender(width));
  }, [width]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {useRouteMatch(pagesWithoutHeader) ? null : 
        (<Header 
          onBurgerMenu={handleBurgerMenu}
          loggedIn={loggedIn}
        />)
        }
        {isLoading
          ? <Preloader />
          : <Switch>
              <Route exact path="/">
                <Main
                  loggedIn={loggedIn}
                />
              </Route>
              <ProtectedRoute
                component={Movies}
                path="/movies"
                loggedIn={loggedIn}
                allMovies={movies}
                searchResults={foundMovies}
                savedMovies={savedMovies}
                onSubmit={handleSearchSubmit}
                onToggleMovieStatus={toggleMovieStatus}
                cardsRendering={cardsRendering}
                notFoundMovies={notFoundMovies}
                onShowMoreMovies={handleShowMoreMovies}
                onCheckbox={toggleCheckboxStatus}
                checked={isChecked}
                keyword={keyword}
                onSearchInputChange={handleSearchInputChange}
              />
              <ProtectedRoute
                component={SavedMovies}
                path="/saved-movies"
                loggedIn={loggedIn}
                searchResults={savedMovies}
                savedMovies={savedMovies}
                notFoundMovies={notFoundSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
                onSubmit={handleSavedMoviesSearchSubmit}
                onCheckbox={toggleSavedMoviesCheckboxStatus}
                checked={isSavedMoviesChecked}
                keyword={savedMoviesKeyword}
                onSearchInputChange={handleSavedMoviesInputChange}
              />
              <ProtectedRoute
                component={Profile}
                path="/profile"
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}
                loggedIn={loggedIn}
                profileMessage={formSubmitMessage}
                resetFormMessage={resetFormMessages}

              />
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
                  formSubmitMessage={formSubmitMessage}
                  resetFormMessage={resetFormMessages}
                />
                }
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
        }
        
        {useRouteMatch(pagesWithoutFooter) ? null : 
        (<Footer />)
        }
        <MenuPage isOpen={isMenuPageOpened} onClose={closeBurgerMenu}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

# Movies (frontend)

> Movies Explorer - the frontend part of the diploma project within Yandex.Practicum course. It is a 4-page adaptive website:
>
> - the 1t page - the project description and the student's portfolio, here you can also register/login;
> - the 2nd page (available after registration and login) - a search bar where you can enter any letters, press the Enter button, and all movies that meet your request will appear, you can also sort movies by short films and like movies;
> - the 3rd page (available after registration and login) - here you can find all movies you liked on the 2nd page;
> - the 4th page (available after registration and login) - the user profile (name and e-mail info).

**Stack:** HTML, CSS, JavaScript, React.js.

**Main functionality:**

- user registration, authorization and authentication;
- search for movies on a third-party server;
- when you like a movie card, movies are saved in a separate "Saved Movies" tab;
- the ability to delete movies when you like them again in the "Movies" tab or when you click on the button with a cross in the "Saved movies";
- when switching from the "Movies" tab to other tabs of the site, as well as when the page is reloaded, the search results are saved;
- filtering movies by duration (short films);
- editing a user profile;
- user logout.

**Steps to follow:**

1. Choose a folder in your local machine where you want this repository to be copied.
2. `git clone https://github.com/NadinePlatonova/movies-explorer-frontend.git` - clone this repository to your local machine.
3. Navigate to `cd movies-explorer-frontend` directory.
4. To install all the app dependencies on the command line run `npm install`.
5. `npm run build` - build a project.
6. To run app in the development mode run `npm run start`.

**Project status:**

- not completed, improvements are planned.

**Plans for improvement:**

- to add error handling when saving a movie card;
- to remove the "crutch" with page reloading.

[Link to the layout in Figma](<https://www.figma.com/file/fKQ86bXbKt5QyLtJDXmOY4/Diploma-(Copy)?node-id=932%3A2802>)

[Link to the website](https://thebestfilms.nomoredomains.rocks)

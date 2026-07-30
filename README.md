# ReadMe.md

### Project summary
This is the final project for my JS class at SMC. The purpose of this project is to implement a deployable web app that shows you the weather and the forecast from a reputable weather API source. React's native features including for state (useState) and lifecycle (useEffect) are used as well as some "advanced" JS features like local browser storage.


### Key features and functionality
- No page refreshing or reloading after the first load
- Everything contained within their own Component containers. Things like API integration is within the component using the API
- Local Storage for the city aka the search bar. When the app is loaded the local storage is checked first for a city in browser storage
- Search form does not reload the page -- the logic remains in React with React dealing with the form input/data
- React useState for the core state per component
- React's useEffect used to run code/logic depending on the state of the React component like first load or if a variable has changed
- OpenWeatherMap API pulled with fetch then put into React useState
- Async/Await used for API fetching
- React "lifecycle" of loading, error, success coded in the 2 components fetching API data
- Parent components pass down the necessary props like the main JSX passes down the city to the weather and forecast components
- All CSS kept simple and contained as inline CSS in JSX
- CSS including the web app being colorful but sleek
- The temperature's color depending on if it's high medium or low


### Technologies used
- Modern React, JSX, and modern Javascript
- Vite as the build tool
- API integration via OpenWeatherMap
- Styling done with inline CSS in JSX
- JS local storage feature

### Instructions for use
- Verify you have node and npm
- Project already created with Vite so just need to:
`npm install`
in the project folder
- Must have a variable filled out in your .env file (check .env.example for an example) VITE_WEATHER_API_KEY which can be found from OpenWeatherMap. There is a free tier
- to run the dev server:
`npm run dev`
- Go to localhost:5173
- For production look to what your platform requires. If nothing else:
`npm run build`
- Pushing to Github Pages does not work because of the VITE_WEATHER_API_KEY var
- Pushing to Netlify is possible. Just remember to add the variable before deploying


### Screenshots


# skyCast

This is a single page application where you can access the weather forecast for the next seven days, this program allows you to check the weather today and tomorrow more accurately. Also, you can easily click on the program map and get the exact weather of that area easily. In addition to all this, this program also provides you with a separate section to display the weather of major cities in the world.
This project is a practice project made using React. Tailwind is also used for styling.
In this project, openweatherapp API is used to obtain weather information.
Among my challenges in making this project, it is possible to mention adding a map and a rain probability chart. Also, working with openweatherapp API was a new and challenging experience.

## Features

- Light/dark mode toggle
- 7 days forecast
- Today's and tomorrow's weather with future hours individually
- Global Map
- Large cities forecast
- Chance of rain chart
- Sign in/ sign up (not completed yet)

## API Reference

#### Get all items

```http
  GET http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## Learn More

You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).

To learn React, check out the [React documentation](https://react.dev/).




## Authors

- [@Malekiamirr](https://www.github.com/Malekiamirr)

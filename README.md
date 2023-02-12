# Taxi Data Visualization

Visualization of Taxi data in Shenzhen using React and deck.gl.



## Preview

Website is hosted at: [taxi-data-visualization.vercel.app](https://taxi-data-visualization.vercel.app/)

![](./img/README/preview.gif)

A data analysis report is also embedded on the website.



## Build

To run this project on your local machine, follow these steps:

- Clone this project
- Run `npm install`
- Run `npm run start`

Now it should open a web page with a control menu. If you need to display the map, you need to add a [Mapbox access token](https://docs.mapbox.com/api/accounts/tokens/) to the environment variable  `REACT_APP_MAPBOX_ACCESS_TOKEN`. Checkout  `src/components/Mapbox.js` where the token is used in detail.


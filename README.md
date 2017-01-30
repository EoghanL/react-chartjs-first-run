I think this is a pretty good mvp of something that may be quite relevant to bask in the near future. I've seeded an array with 5000 unique sign-up details including the date, which is currently limited to 1/1/2016-12/31/2016.
The graph can be switched from an annual view to an individual month view. The month view will let you scroll through each month individually. While this is a very basic version I think the mixture between what react and chart.js is capable of could be a great way to outline and explore data trends in your customer base.
One last thing is that the random seed generator I'm using didn't have a function for universities that I could find so I used companies instead. So while I could not chart by University yet, I don't foresee it posing a challenge if the data was there. 


Getting started is easy, just run npm install from the root directory and then npm start.

The seed file in the data directory contains all of the seed data that is sent to the reducer for the initial state.
You can change mostly everything in the table and the amount of seed items from directly in here.

The rest of the React/Redux files are in their respective directories.(Actions, Components, Reducers, Stores).

The graph in this miniApp was made using the [React-ChartJS-2 app](https://github.com/gor181/react-chartjs-2)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

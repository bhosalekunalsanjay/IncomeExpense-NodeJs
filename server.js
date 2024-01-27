const express = require('express');
const app = express();
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 3000;
const routePrefix = "apiv1";

// Import route files
const authRoutes = require('./routers/auth');
const usersRoutes = require('./routers/users');
const postsRoutes = require('./routers/posts');
const viewsRoutes = require('./routers/views');
const CustomError = require('./utils/customError');

//#region MIDDLEWARE
app.set('view engine', 'pug');//this is to set the view engine as pug
app.set('views', './pug');//this is to tell pug where the views are located
app.use(express.static('public'));//this is to tell express to serve static files
app.use(express.urlencoded({ extended: true }))//to read the data from request body
//#endregion

//#region ROUTING
app.use(`/${routePrefix}/auth`, authRoutes);
app.use(`/${routePrefix}/users`, usersRoutes);
app.use(`/${routePrefix}/posts`, postsRoutes);
app.use(`/${routePrefix}/views`, viewsRoutes);
//#endregion

//#region WILDCARD ROUTE FOR INVALID ROUTES (MAKE SURE TO USE THIS AFTER ALL ROUTES ARE DEFINED ABOVE)
app.get('*', function (req, res) {
  res.status(404).send('Sorry, this is an invalid URL.');
});
//#endregion

//#region Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);

  // Handle different types of errors
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message, errorName: err.name });
  }

  // Handle other types of errors
  return res.status(500).json({ error: 'Internal Server Error' });
});
//#endregion

//#region Main APP Starting point
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//#endregion
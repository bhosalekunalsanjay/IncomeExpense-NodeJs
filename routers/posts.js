const express = require('express');
const router = express.Router();
const dummyData = require('../dummy');
const posts = dummyData.posts;
const { NO_DATA_FOUND } = require("../utils/globalConstants");
const CustomError = require('../utils/customError');

//#region WITH MULTIPLE ROUTE PARAMS
router.get('/:year/:month', (req, res) => {
  const year = req.params.year;
  const month = req.params.month;
  res.send(posts.filter(post => post.year == year && post.month == month) ?? NO_DATA_FOUND);
});
//#endregion

//#region ERROR THROWING EXAMPLE
router.get('/throwCustomError',(req, res,next)=>{
  try {
    var a;
    a.id = "";
    console.log("aaaaa");
    throw new CustomError("Custom error message", "Error name here", 401);
  } catch (error) {
    console.log('error caught at catch block');
    next(error);
  }
})

//#region SAME ROUTE BUT DIFFERENT HTTP VERBS
router.route("/:Id")
  .get((req, res) => {
    const post = posts.find(post => post.id === req.params.Id) ?? NO_DATA_FOUND;
    res.send(post)
  })
  .put((req, res) => {
    const newPostName = "New Post 1234";
    const post = posts.find(post => post.id === req.params.Id) ?? NO_DATA_FOUND;
    post.name = newPostName;
    res.send(post);
  })
  .delete((res, req) => {
    const objWithIdIndex = posts.findIndex((post) => post.id === req.params.Id);
    let deletedItem;
    if (objWithIdIndex > -1) {
      deletedItem = posts.splice(objWithIdIndex, 1);
    }
    res.send(deletedItem);
  })
//#endregion
module.exports = router;
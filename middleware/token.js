module.exports = function (req, res, next) {
  console.log("Creating Token");
  req.token = true;
  next();
}

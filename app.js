const express = require("express");
const app = require();
app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;

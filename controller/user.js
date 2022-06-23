const { response } = require("express");

const userGet = (req, res = response) => {
  const { q, name } = req.query;
  // example: http://localhost:8080/api/users?q=pokemon&name=anthony

  res.json({
    message: "get api :D - controller",
    q,
    name,
  });
};

const userPost = (req, res) => {
  const body = req.body;
  res.json({
    message: "post api ",
    body,
  });
};

const userPut = (req, res) => {
  const { id } = req.params;
  // example: http://localhost:8080/api/users/10

  res.json({
    message: "update api",
    id,
  });
};

const userDelete = (req, res) => {
  res.json({
    message: "delete api",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};

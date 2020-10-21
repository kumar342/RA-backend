const ReadyAssistUser = require("../model/model");

const totalUsers = (req, res) => {
  ReadyAssistUser.find()
    .then((Total) => {
      res.json(Total);
    })
    .catch((err) => {
      res.json(err);
    });
};

const addUser = (req, res) => {
  ReadyAssistUser.create({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isActive: true,
  })
    .then((add) => {
      res.status(200).json({
        data: add,
      });
    })
    .catch((err) => {
      res.status(200).json({
        data: err.message,
        message: "UserName is Already Existed",
      });
    });
};

const totalUserById = (req, res) => {
  const reservationId = ReadyAssistUser.findById(req.params.Id)
    .then((Id) => {
      res.json(Id);
    })
    .catch((err) => {
      res.json(err);
    });
};

const userDeleteById = (req, res) => {
  const deleteReservation = ReadyAssistUser.findByIdAndUpdate(req.params.Id, {
    isActive: req.body.isActive,
  })
    .then((user) => {
      res.json({
        data: user,
      });
    })
    .catch((err) => res.json({ message: err.message }));
};

const userUpdateById = (req, res) => {
  const updateReservation = ReadyAssistUser.updateOne(
    { _id: req.params.Id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isActive: req.body.isActive,
      },
    }
  )
    .then((updateReservation) => {
      res.json(updateReservation);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  totalUsers,
  addUser,
  totalUserById,
  userDeleteById,
  userUpdateById,
};

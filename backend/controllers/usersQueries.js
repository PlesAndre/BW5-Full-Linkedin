import User from "../models/userSchema.js";

const getAllUsers = async (req, res, next) => {
  try {
    const returnAll = await User.find();
    console.log("Users fetched:", returnAll);
    res.json(returnAll);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const returnUser = await User.findById(req.params.id);
    console.log("User fetched:", returnUser);
    res.json(returnUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllUsers, getUserById };

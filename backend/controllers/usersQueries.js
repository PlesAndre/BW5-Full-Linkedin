import User from "../models/userSchema.js";
import Experience from "../models/experienceSchema.js";

const getAllUsers = async (req, res, next) => {
  try {
    const returnAll = await User.find();

    res.json(returnAll);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const returnUser = await User.findById(req.params.id);

    res.json(returnUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getExperiences = async (req, res, next) => {
  try {
    const returnExperiences = await User.findById(req.params.id).populate(
      "experiences"
    );

    res.json(returnExperiences);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllUsers, getUserById, getExperiences };

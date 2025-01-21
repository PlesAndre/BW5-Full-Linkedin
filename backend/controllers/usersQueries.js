import User from "../models/userSchema.js";

const getAllUsers = async (req, res, next) => {
  try {
    const returnAll = await User.find({});
    console.log("Users fetched:", returnAll);
    return returnAll;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers };

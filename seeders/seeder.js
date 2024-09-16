import User from "../model/UserModel.js";
import clean from "./helpers/clean.js";

const createSeeder = async () => {
  await clean();
  const user = await User.create({
    name: "John",
    email: "JohnDoe@gmail.com",
  });
};

export default createSeeder;

import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: "2d",
  });
};

export default generateToken;

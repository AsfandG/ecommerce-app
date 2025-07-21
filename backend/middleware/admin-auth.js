import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authHeaders = req.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized login again.",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not authorized login again",
      });
    }

    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;

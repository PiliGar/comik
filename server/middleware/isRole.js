const isAdminRole = () => (req, res, next) => {
  if (req.user.role === "admin") {
    console.log("IS ADMIN", req.user.role);
    return next();
  } else {
    return res.status(401).json({ status: "Unauthorized" });
  }
};

module.exports = {
  isAdminRole,
};

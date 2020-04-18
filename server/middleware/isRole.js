const isAdminRole = () => (req, res, next) => {
  if (req.user.role === "admin") {
    console.log("USER ROLE", req.user.role);
    return next();
  } else {
    console.log("USER ROLE", req.user.role);
    return res.status(401).json({ status: "Unauthorized" });
  }
};

module.exports = {
  isAdminRole,
};

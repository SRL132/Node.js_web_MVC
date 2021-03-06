const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const bearerToken = req.headers.authorization.substr(7);
    try {
      const userClaims = await auth.verifyIdToken(bearerToken);

      console.log(userClaims);

      const { email, uid } = userClaims;

      req.user = {
        email: email,
        uid: uid,
      };
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).send({
      data: null,
      message: "Not Authorized",
    });
  }
}

module.exports = authMiddleware;

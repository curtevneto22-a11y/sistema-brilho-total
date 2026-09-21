async function authAdminMiddleware(req, res, next) {
  if (!req.user || req.user.role != "admin") {
    return res.status(403).json({
      message: "Acesso negado, usuario deve ser um administrador!",
    });
  }

  next();
}

export default authAdminMiddleware;

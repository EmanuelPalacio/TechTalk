const validateAdminRol = (req, res, next) => {
  const { id } = req.params;
  const tokenID = req.id;
  console.log(id, tokenID);
  const rol = req.rol;
  if (rol !== 'admin' && id !== tokenID) {
    return res.status(400).json({
      ok: false,
      msg: 'You need to be an administrator to perform this request',
    });
  }
  next();
};
export default validateAdminRol;

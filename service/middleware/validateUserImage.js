import path from 'path';

const validateUserImage = (req, res, next) => {
  if (req.file) {
    // verificar la extensión y tamaño del archivo aquí
    const filetypes = /jpeg|jpg|png|gif/; // extensiones permitidas
    const mimetype = filetypes.test(req.file.mimetype); // verificar mimetype
    const extname = filetypes.test(
      path.extname(req.file.originalname).toLowerCase(),
    ); // verificar extensión

    if (!mimetype || !extname) {
      // verificar tamaño máximo de 1 MB
      return res.status(400).json({
        error: `Only files with the following extensions are allowed: jpeg | jpg | png | gif`,
      });
    }
    if (req.file.size > 1000000) {
      return res.status(400).json({
        error: `Files with a size greater than 1 MB are not allowed`,
      });
    }
    // el archivo cumple los requisitos
    console.log(req.file);
    next();
  } else {
    return res.status(400).json({ error: 'You must send a file.' });
  }
};
export default validateUserImage;

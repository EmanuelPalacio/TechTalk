import path from 'path';

const validateListeningAudio = (req, res, next) => {
  if (req.file){
    //verificamos la extención y el tamaño del archivo
    const filetypes = /mp3|ogg|/;//extenciones permitidas
    const mimetype = filetypes.test(req.file.mimetype);//verificar mimite
    const extname = filetypes.test(
      path.extname(req.file.originalname).toLowerCase()
    );//verificar extención
  if(!mimetype || !extname){
    return res.status(400).json({
      error:`Only files with the following extensions are allowed: mp3, ogg`
    })
  }
  if(req.file.size > 4000000){
    return res.status(400).json({
      error: `File with a size greater than 4 MB are not allowed`
    })
  }
  //El archivo cumple los requisitos
  console.log(req.file)
  next();
  }else{
    return res.status(400).json({error: 'You must send file.'});
  }
}

export default validateListeningAudio
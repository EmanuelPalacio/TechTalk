import { Router } from 'express';

const router = Router();

// Rutas de prueba solamente
router.get('/login', (req, res, next) => {
  res.send('Hello user, you are logged IN');
});

/* Solo necesitas por el momento 3 rutas post
  /login 
  /googleLogin
  /githubLogin

  a futuro se puede evaluar agregar la ruta de generacion de tokens para verificar la actividad de la sesion, aunque tendria que investar si es necesario por ser una app de movil.
*/

//estas rutas no necesitan el midleware de validacion del token porque son las que envian el token.

/* router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('Hello user, you are logged IN and you can DELETE register');
}); */

/* router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('Hello user ADMIN, you are logged IN');
});
// fin rutas de prueba

router.post('/register', register);
router.post('/login', login); */

export default router;

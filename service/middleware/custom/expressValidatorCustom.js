import { UserSchema } from '../../models/index.js';

export const checkEmail = async (email = '') => {
  const findEmail = await UserSchema.findOne({ email });
  if (findEmail) {
    throw new Error(`The email ${email} already exists in the database`);
  }
};

export const checkId = async (id = '', { req }) => {
  const findId = await UserSchema.findById(id);
  if (!findId) {
    throw new Error(`The user ${id} does not exist in the database`);
  }
  req.user = findId;
};

/* export const checkRol = async (rol = '') => {
  const verifyRol = await RolesSchema.findOne({ rol });
  if (!verifyRol) {
    throw new Error(`el rol ${rol} no existe en la base de datos`);
  }
};



export const checkPassword = async (password = '') => {
  const validPassword = bcryptjs.compareSync(password, UserSchema.password);
  if (!validPassword) {
    throw new Error(`El usuario / contraseña no son correctos`);
  }
};


export const colecctionUpdate = async (colecction = '') => {
  const colecctions = ['user', 'products'];
  if (!colecctions.includes(colecction)) {
    throw new Error(`La colección no es valida`);
  }
}; */

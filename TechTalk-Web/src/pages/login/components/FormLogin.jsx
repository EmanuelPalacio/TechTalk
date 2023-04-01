import Logo from '../../../assets/Logo.jsx';
import style from '../css/loginStyle.module.css';

export default function FormLogin() {
  return (
    <div className={style.login__content_form}>
      <div className={style.login__logo}>
        <Logo />
      </div>
      <form className={style.form_login}>
        <label className={style.form_label}>
          <input type='text' placeholder='email' />
          <span className='icon-user'></span>
        </label>
        <label className={style.form_label}>
          <input type='password' placeholder='Contraseña' />
          <span className='icon-password'></span>
        </label>
        <button className={style.form__btn_forgot_password}>
          ¿Olvidaste tu contraseña?
        </button>
        <button className={style.form__btn}>Iniciar Sesión</button>
        <p>
          ¿No eres miembro? <button>Registrate</button>
        </p>
      </form>
      <hr />
      {/* <GoogleLogin />
        <GithubLogin /> */}
    </div>
  );
}

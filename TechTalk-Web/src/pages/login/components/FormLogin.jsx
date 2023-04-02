import Logo from '../../../assets/Logo.jsx';
import style from '../css/loginStyle.module.css';
import emailIcon from '../../../assets/icons/email.svg';
import securityIcon from '../../../assets/icons/security.svg';
import eyeIcon from '../../../assets/icons/eye.svg';
import GlobalButton from '../../../components/GlobalButton.jsx';
import { useState } from 'react';
import login from '../../../service/logins.js';

export default function FormLogin() {
  const [data, setData] = useState({});

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = async (event) => {
    event.preventDefault();

    const res = await login({ ...data });
    console.log(res);
  };

  return (
    <div className={style.login__content_form}>
      <div className={style.login__logo}>
        <Logo />
      </div>
      <form onSubmit={submitForm} className={style.form_login}>
        <label className={style.form_label}>
          <img src={emailIcon} alt='email icon' />
          <input
            onChange={handleInput}
            className={style.form_input}
            type='text'
            placeholder='email'
            id='email'
            name='email'
          />
        </label>
        <label className={style.form_label}>
          <img src={securityIcon} alt='email icon' />
          <input
            onChange={handleInput}
            className={style.form_input}
            type='password'
            placeholder='Contraseña'
            id='password'
            name='password'
          />
          <img src={eyeIcon} alt='email icon' />
        </label>
        <button type='button' className={style.form__btn_link}>
          ¿Olvidaste tu contraseña?
        </button>
        <GlobalButton type='submit' text='Iniciar Sesión' />
        <p>
          ¿No eres miembro?{' '}
          <button type='button' className={style.form__btn_link}>
            Registrate
          </button>
        </p>
      </form>
      <hr />
      {/* <GoogleLogin />
        <GithubLogin /> */}
    </div>
  );
}

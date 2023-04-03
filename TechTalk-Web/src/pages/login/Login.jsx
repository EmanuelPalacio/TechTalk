import { HiRobot } from '../../assets/index.js';
import FormLogin from './components/FormLogin.jsx';
import style from './css/loginStyle.module.css';
import Logo from '../../assets/Logo.jsx';
import GoogleSingIn from './components/GoogleLogin.jsx';

export default function Login() {
  return (
    <section className={style.login}>
      <div className={style.login__robot}>
        <HiRobot />
      </div>
      <div className={style.login__container_form}>
        <div className={style.login__content_form}>
          <div className={style.login__logo}>
            <Logo />
          </div>
          <FormLogin />
          <hr />
          <GoogleSingIn />
        </div>
      </div>
    </section>
  );
}

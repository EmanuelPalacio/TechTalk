import { HiRobot } from '../../assets/index.js';
import FormLogin from './components/FormLogin.jsx';
import style from './css/loginStyle.module.css';

export default function Login() {
  return (
    <section className={style.login}>
      <div className={style.login__robot}>
        <HiRobot />
      </div>
      <div className={style.login__container_form}>
        <FormLogin />
      </div>
    </section>
  );
}

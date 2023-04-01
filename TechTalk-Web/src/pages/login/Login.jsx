import HiRobot from '../../assets/HiRobot.jsx';
import style from './css/loginStyle.module.css';

export default function Login() {
  return (
    <section className={style.login}>
      <div className={style.login__robot}>
        <HiRobot />
      </div>
      <div className={style.login__form}></div>
    </section>
  );
}

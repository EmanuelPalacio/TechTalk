import style from '../css/globalButton.module.css';

export default function GlobalButton({ text, btn = 'primary', type, action }) {
  const option = btn === 'primary' ? style.btn_primary : style.btn_secondary;

  return (
    <button type={type} className={option} onClick={() => action && action()}>
      {text}
    </button>
  );
}

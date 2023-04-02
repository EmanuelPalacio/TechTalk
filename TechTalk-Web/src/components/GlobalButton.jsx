import style from '../css/globalButton.module.css';

export default function GlobalButton({ text, action, btn = 'primary', type }) {
  const option = btn === 'primary' ? style.btn_primary : style.btn_secondary;

  return (
    <button type={type} className={option} onClick={() => action()}>
      {text}
    </button>
  );
}

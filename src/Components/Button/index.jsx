import './styles.css';

export const Button = ({text, onclick, disabled}) =>(
  <button
  className = 'button'
  onClick={onclick}
  disabled={disabled}
  >
    {text}
  </button>
);
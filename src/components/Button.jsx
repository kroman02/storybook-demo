import './Button.css';

export function Button({ label, variant = 'primary', size = 'medium', disabled = false, onClick }) {
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

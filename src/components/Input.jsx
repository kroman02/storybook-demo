import './Input.css';

export function Input({ label, placeholder, error, disabled = false, onChange }) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <input
        className={`field__input${error ? ' field__input--error' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}

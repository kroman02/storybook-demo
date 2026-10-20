import { Button } from './Button';
import './Hero.css';

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryLabel = 'Get started',
  secondaryLabel,
  align = 'center',
  theme = 'light',
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className={`hero hero--${align} hero--${theme}`}>
      {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
      <h1 className="hero__title">{title}</h1>
      {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      <div className="hero__actions">
        <Button label={primaryLabel} size="large" onClick={onPrimaryClick} />
        {secondaryLabel && (
          <Button label={secondaryLabel} size="large" variant="secondary" onClick={onSecondaryClick} />
        )}
      </div>
    </section>
  );
}

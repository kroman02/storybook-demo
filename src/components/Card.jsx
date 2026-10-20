import { Badge } from './Badge';
import { Button } from './Button';
import './Card.css';

export function Card({ title, description, status, statusTone = 'neutral', actionLabel = 'View' }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        {status && <Badge text={status} tone={statusTone} />}
      </div>
      <p className="card__body">{description}</p>
      <Button label={actionLabel} size="small" variant="secondary" />
    </div>
  );
}

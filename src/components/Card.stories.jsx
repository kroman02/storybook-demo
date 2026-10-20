import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    statusTone: { control: 'select', options: ['neutral', 'success', 'warning', 'danger'] },
  },
  args: {
    title: 'Project Apollo',
    description: 'A small card composed from the Badge and Button components.',
    actionLabel: 'Open project',
  },
};

export const Default = {};
export const Active = { args: { status: 'Active', statusTone: 'success' } };
export const AtRisk = { args: { status: 'At risk', statusTone: 'danger' } };

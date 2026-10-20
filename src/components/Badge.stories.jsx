import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'success', 'warning', 'danger'] },
  },
  args: { text: 'Badge' },
};

export const Neutral = { args: { tone: 'neutral' } };
export const Success = { args: { tone: 'success', text: 'Active' } };
export const Warning = { args: { tone: 'warning', text: 'Pending' } };
export const Danger = { args: { tone: 'danger', text: 'Failed' } };

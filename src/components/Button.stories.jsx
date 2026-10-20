import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
  args: { label: 'Button', onClick: fn() },
};

export const Primary = { args: { variant: 'primary' } };
export const Secondary = { args: { variant: 'secondary' } };
export const Danger = { args: { variant: 'danger', label: 'Delete' } };
export const Small = { args: { size: 'small' } };
export const Large = { args: { size: 'large' } };
export const Disabled = { args: { disabled: true } };

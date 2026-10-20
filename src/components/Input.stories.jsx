import { fn } from '@storybook/test';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: { label: 'Email', placeholder: 'you@example.com', onChange: fn() },
};

export const Default = {};
export const WithError = { args: { error: 'Please enter a valid email' } };
export const Disabled = { args: { disabled: true } };

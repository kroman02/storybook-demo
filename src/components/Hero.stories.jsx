import { fn } from '@storybook/test';
import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    align: { control: 'radio', options: ['center', 'left'] },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
  args: {
    eyebrow: 'Now in beta',
    title: 'Build interfaces one component at a time',
    subtitle: 'Develop, document and share UI components in isolation with Storybook — then ship them anywhere.',
    primaryLabel: 'Get started',
    secondaryLabel: 'View docs',
    onPrimaryClick: fn(),
    onSecondaryClick: fn(),
  },
};

export const Default = {};
export const Dark = { args: { theme: 'dark' } };
export const LeftAligned = { args: { align: 'left' } };
export const SingleAction = { args: { secondaryLabel: undefined, eyebrow: undefined } };

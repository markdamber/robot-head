<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Clock from '../lib/components/Clock.svelte';

  const { Story } = defineMeta({
    title: 'Components/Clock',
    component: Clock,
    tags: ['autodocs'],
    argTypes: {
      theme: {
        control: { type: 'select' },
        options: ['light', 'dark'],
      },
      size: {
        control: { type: 'range', min: 200, max: 800, step: 50 },
      },
      time: {
        control: { type: 'date' },
      },
    },
    args: {
      size: 300,
      theme: 'light',
      time: new Date(),
    },
  });
</script>

<!-- Default clock -->
<Story name="Default" />

<!-- Dark mode clock -->
<Story name="Dark Mode" args={{ theme: 'dark' }} />

<!-- Large iPad size -->
<Story name="iPad Size" args={{ size: 600 }} />

<!-- Dark iPad size -->
<Story name="iPad Dark" args={{ size: 600, theme: 'dark' }} />

<!-- Custom time examples -->
<Story name="Morning" args={{ time: new Date('2024-01-01T09:15:30') }} />

<Story name="Evening" args={{ theme: 'dark', time: new Date('2024-01-01T21:45:15') }} />

<!-- Different sizes -->
<Story name="Small" args={{ size: 250 }} />

<Story name="Large" args={{ size: 500 }} />
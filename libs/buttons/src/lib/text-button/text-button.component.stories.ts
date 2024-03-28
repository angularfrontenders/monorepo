import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { TextButtonComponent } from './text-button.component';

const meta: Meta<TextButtonComponent> = {
  component: TextButtonComponent,
  title: 'Componentes/Botones',
  decorators: [
    componentWrapperDecorator((story) =>`<div style="text-align: center; padding: 1em; background-color: #6f6f6f">${story}</div>`)
  ],
  argTypes: {
    label: {
      name: 'label',
      type: {
          name: 'string',
          required: false
      },
      description: 'Text to display inside the button.',
      table: {
          category: 'content',
          type: {
              summary: 'string'
          },
          defaultValue: {
              summary: ''
          }
      },
      control: {
          type: 'text'
      }
    },
    type: {
    name: 'type',
    type: {
        name: 'string',
        required: false
    },
    description: 'Modify the main purpose of the button.',
    table: {
        category: 'display',
        type: {
            summary: 'primary | secondary'
        },
        defaultValue: {
            summary: 'primary'
        }
    },
    options: ['primary', 'secondary'],
    control: {
        type: 'select'
    }
    }
  }
};

export default meta;
type Story = StoryObj<TextButtonComponent>;

export const Primary: Story = {
  name: 'Botón primario o principal',
  args: {
    label: 'click me!',
    type: 'primary'
  }
};

export const Secondary: Story = {
  name: 'Botón secundario o auxiliar',
  args: {
    ...Primary.args,
    type: 'secondary'
  }
};

export const Basic: Story = {
  name: 'Botón básico o vacío',
  tags: ['hidden']
};

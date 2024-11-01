import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { TextButtonComponent } from './text-button.component';

const meta: Meta<TextButtonComponent> = {
    component: TextButtonComponent,
    title: 'Componentes/Botones',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Componente para iniciar una acción',
        docs: {
            description: {
                component:
                    'Botón rectangular que contiene un texto indicando la acción. Además puede visualizarse de dos maneras para indicar su propósito: primario o secundario.'
            }
        }
    },
    decorators: [
        componentWrapperDecorator((story) => `<div style="text-align: center; padding: 1em; background-color: #6f6f6f">${story}</div>`)
    ],
    argTypes: {
        label: {
            name: 'label',
            type: {
                name: 'string',
                required: false
            },
            description: 'Texto a visualizar dentro del botón.',
            table: {
                category: 'contenido',
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
            description: 'Modifica el propósito del botón.',
            table: {
                category: 'presentación',
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
    parameters: {
        docs: {
            description: {
                story: 'Estilo de botón primario usado para guiar al usuario en un flujo. Usar uno por página.'
            }
        }
    },
    args: {
        label: 'clica aquí!',
        type: 'primary'
    }
};

export const Secondary: Story = {
    name: 'Botón secundario o auxiliar',
    parameters: {
        docs: {
            description: {
                story: 'Estilo de botón secundario usado frecuentemente para realizar acciones secundarias.'
            }
        }
    },
    args: {
        ...Primary.args,
        type: 'secondary'
    }
};

export const Basic: Story = {
    name: 'Botón básico o vacío',
    parameters: {
        docs: {
            description: {
                story: 'No utilizar si no hay texto.'
            }
        }
    },
    tags: ['hidden']
};

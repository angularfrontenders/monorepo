import type { Preview } from '@storybook/angular';
import afTheme from './themes/af-theme';
import DocumentationTemplate from './doc-templates/documentationTemplate.mdx';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Documentation', 'Components']
            }
        },
        controls: { expanded: true },
        docs: {
            theme: afTheme,
            page: DocumentationTemplate,
            toc: {
                contentsSelector: '.sbdocs-content',
                headingSelector: 'h1, h2, h3',
                ignoreSelector: '#primary',
                title: 'Tabla de Contenidos',
                disable: false,
                unsafeTocbotOptions: {
                    orderedList: false
                }
            }
        }
    }
};

export default preview;

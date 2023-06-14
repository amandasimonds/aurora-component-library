import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import '!style-loader!css-loader!sass-loader!../projects/ngx-aurora-pattern-library/src/lib/styles/aurora-theme.scss';
setCompodocJson(docJson);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // docs: { inlineStories: true },
    options: {
        storySort: {
            order: ['Getting Started', 'Global', 'Components', '*'],
        },
    },
    // globalTypes: {
    //     theme: {
    //         description: 'Global theme for components',
    //         defaultValue: 'light',
    //         toolbar: {
    //             // The label to show for this toolbar item
    //             title: 'Theme',
    //             icon: 'mirror',
    //             // Array of plain string values or MenuItem shape (see below)
    //             items: ['light', 'dark'],
    //             // Change title based on selected value
    //             dynamicTitle: true,
    //         },
    //     },
    // },

    'data-theme-toggle': {
        querySelector: 'html',
        'data-target': 'theme',
        default: 'light',
        values: {
            dark: 'dark',
            light: 'light',
        },
        lightFill: '#a05b00',
        darkFill: '#0926b5',
    },
};

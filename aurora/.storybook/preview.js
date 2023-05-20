import { setCompodocJson } from '@storybook/addon-docs/angular'
import docJson from '../documentation.json'
import '!style-loader!css-loader!sass-loader!../projects/ngx-aurora-pattern-library/src/lib/styles/aurora-theme.scss'
setCompodocJson(docJson)

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
}

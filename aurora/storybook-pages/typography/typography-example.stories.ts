import {
    componentWrapperDecorator,
    Meta,
    moduleMetadata,
    Story,
} from '@storybook/angular';
import { TypographyExampleModule } from './typography-example.module';
import { TypographyExampleComponent } from './typography-example.component';

export default {
    title: 'Global/Typography',
    decorators: [
        moduleMetadata({
            imports: [TypographyExampleModule],
        }),
        componentWrapperDecorator(
            () => `
            <div class="aurora-dark-theme">
			<typography-example></typography-example>
            </div>
		`
        ),
    ],
    argTypes: {},
} as Meta;

const Template: Story<TypographyExampleComponent> = (
    args: TypographyExampleComponent
) => ({
    props: args,
});

// const withThemeProvider = (Story, context) => {
//     const theme = context.globals.theme;
//     return (
//         <ThemeProvider theme={theme}>
//             <Story />
//         </ThemeProvider>
//     );
// };

export const Default = Template.bind({});
Default.args = {};

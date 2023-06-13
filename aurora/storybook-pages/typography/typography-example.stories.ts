import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { TypographyExampleModule } from './typography-example.module';
import { TypographyExampleComponent } from './typography-example.component';

export default {
    title: 'Global/Typography',
    decorators: [
        moduleMetadata({
            imports: [ TypographyExampleModule ]
        }),
        componentWrapperDecorator(() => `
			<typography-example></typography-example>
		`)
    ],
    argTypes: {},
} as Meta;

const Template: Story<TypographyExampleComponent> = (args: TypographyExampleComponent) => ( {
    props: args
} );

export const Default = Template.bind({});
Default.args = {};

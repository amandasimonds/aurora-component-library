import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { ColorsExampleModule } from './colors-example.module';
import { ColorsExampleComponent } from './colors-example.component';

export default {
    title: 'Global/Colors & Style Variables',
    decorators: [
        moduleMetadata({
            imports: [ ColorsExampleModule ]
        }),
        componentWrapperDecorator(() => `
			<epd-pl-colors-example></epd-pl-colors-example>
		`)
    ],
    argTypes: {},
} as Meta;

const Template: Story<ColorsExampleComponent> = (args: ColorsExampleComponent) => ( {
    props: args
} );

export const Default = Template.bind({});
Default.args = {};

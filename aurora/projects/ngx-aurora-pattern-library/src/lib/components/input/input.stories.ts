import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';
// This exports the Stories group for this component
export default {
    title: 'Components/Input',
    // The component related to the Stories
    component: InputComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [InputComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<InputComponent> = (
    args: InputComponent
) => ({
    component: InputComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    labelText: 'Input Label',
    placeholder: 'placeholder',
    disabled: false
};

import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { Story } from '@storybook/angular/types-6-0'
import { AuroraButtonComponent } from './button.component'
// This exports the Stories group for this component
export default {
    title: 'Components/Button',
    // The component related to the Stories
    component: AuroraButtonComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [AuroraButtonComponent],
            imports: [CommonModule],
        }),
    ],
}
// This creates a Story for the component
const Template: Story<AuroraButtonComponent> = (args: AuroraButtonComponent) => ({
    component: AuroraButtonComponent,
    props: args,
    template: `<aurora-button>Button</aurora-button>`,
})

export const Text = Template.bind({})
Text.args = {
    mode: 'text',
}

export const TextWithIcon = Template.bind({})
TextWithIcon.args = {
    mode: 'text',
    icon: 'back',
}

export const Primary = Template.bind({})
Primary.args = {
    mode: 'primary',
    disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
    mode: 'secondary',
    disabled: false,
}


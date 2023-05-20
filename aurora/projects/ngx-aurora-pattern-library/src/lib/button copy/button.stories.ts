import { Meta, Story } from '@storybook/angular/types-6-0'
import { CommonModule } from '@angular/common'
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from './button.component'

export default {
    title: 'Components/Buttons/UvButton',
    component: ButtonComponent,

    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule],
        }),
        componentWrapperDecorator(
            (story) => `<div style="height: 68px;">${story}</div>`
        ),
    ],
} as Meta

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
})

export const Text = Template.bind({})
Text.args = {
    label: 'Text Button',
    mode: 'text',
}

Text.parameters = {
    docs: {
        source: {
            mode: 'auto',
        },
    },
}

export const TextWithIcon = Template.bind({})
TextWithIcon.args = {
    label: 'Text With Icon',
    mode: 'text',
    icon: 'back',
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Primary Button',
    mode: 'primary',
}

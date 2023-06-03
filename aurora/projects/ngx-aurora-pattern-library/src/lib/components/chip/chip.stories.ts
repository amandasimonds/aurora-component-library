import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ChipComponent } from './chip.component';

export default {
    title: 'Components/Chip',
    component: ChipComponent,
    decorators: [
        moduleMetadata({
            declarations: [ChipComponent],
            imports: [CommonModule],
        }),
    ],
};

const Template: Story<ChipComponent> = (
    args: ChipComponent
) => ({
    component: ChipComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Chip Label',
};
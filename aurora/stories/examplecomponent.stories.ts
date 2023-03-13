import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgxAuroraPatternLibraryComponent, NgxAuroraPatternLibraryModule } from 'ngx-aurora-pattern-library';

export default {
  title: 'Example/MyLib',
  component: NgxAuroraPatternLibraryComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxAuroraPatternLibraryModule],
    }),
  ],
} as Meta;

const Template: Story<NgxAuroraPatternLibraryComponent> = (args: NgxAuroraPatternLibraryComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<NgxAuroraPatternLibraryComponent>;
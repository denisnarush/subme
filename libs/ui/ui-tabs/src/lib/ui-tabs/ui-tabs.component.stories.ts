import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { UiTabModule } from '@s/ui/ui-tab';
import { UiFieldsetModule } from '@s/ui/ui-fieldset';

import { UiTabsComponent } from './ui-tabs.component';

export default {
  title: 'UI/Tabs',
  component: UiTabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [UiTabsComponent],
      imports: [CommonModule, UiTabModule, UiFieldsetModule],
    }),
  ],
} as Meta<UiTabsComponent>;

const code = `
<div class="s-ui-tabs" #auth__tabs>
  <span class="s-ui-tab" [ref]="auth__tabs">Log In</span>
  <span class="s-ui-tab" [ref]="auth__tabs">Sign In</span>
</div>

<ng-container *ngIf="auth__tabs.selected === 0">
<div
  s-ui-field-email
  data-placeholder="johnny.silverhand@mail.com"
  data-label="email"
  [name]="'email'"
></div>
<div
  s-ui-field-password
  data-placeholder="7 digits"
  data-label="one time password"
  [name]="'password'"
></div>
</ng-container>

<ng-container *ngIf="auth__tabs.selected === 1">
<div
  s-ui-field-email
  data-placeholder="johnny.silverhand@mail.com"
  data-label="email"
  [name]="'email'"
></div>
<div
  s-ui-field-text
  data-placeholder="Johnny Silverhand"
  data-label="username"
  [name]="'username'"
></div
></ng-container>
`;

const Template: Story<UiTabsComponent> = (args) => ({
  template: code,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    iframeHeight: '200px',
    description: {
      component: 'Tabs make it easy to explore and switch between different views.',
    },
    source: {
      code: code,
    },
  },
};

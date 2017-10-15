import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormSelect from './index';

const props = {
  name: 'foo',
  onChange: action('on-change')
};

const Options = () => [
  <option key="0" value="0">
    First option
  </option>,
  <option key="1" value="1">
    Second option
  </option>,
  <option key="2" value="2">
    Third option
  </option>
];

storiesOf('Select', module)
  .add('default', () => (
    <FormSelect {...props}>
      <Options />
    </FormSelect>
  ))
  .add('placeholder', () => (
    <FormSelect {...props} placeholder="Placeholder option">
      <Options />
    </FormSelect>
  ))
  .add('invalid', () => (
    <FormSelect {...props} state="invalid" placeholder="Placeholder option">
      <Options />
    </FormSelect>
  ))
  .add('valid', () => (
    <FormSelect {...props} state="valid" placeholder="Placeholder option">
      <Options />
    </FormSelect>
  ))

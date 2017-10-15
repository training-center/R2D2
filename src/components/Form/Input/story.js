import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormInput from './index';

const props = {
  name: 'foo',
  onChange: action('on-change')
};

storiesOf('Input', module)
  .add('default', () => <FormInput {...props} />)
  .add('invalid', () => <FormInput {...props} state="invalid" />)
  .add('valid', () => <FormInput {...props} state="valid" />);

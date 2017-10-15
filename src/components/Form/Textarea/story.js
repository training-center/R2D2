import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormTextarea from './index';

const props = {
  name: 'foo',
  onChange: action('on-change')
};

storiesOf('Textarea', module)
  .add('default', () => <FormTextarea {...props} />)
  .add('invalid', () => <FormTextarea {...props} state="invalid" />)
  .add('valid', () => <FormTextarea {...props} state="valid" />);

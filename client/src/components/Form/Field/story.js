import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from './index';
import FormInput from '../Input';

storiesOf('Field').add('default', () => (
  <Field label="Label" htmlFor="input">
    <FormInput name="input" />
  </Field>
));

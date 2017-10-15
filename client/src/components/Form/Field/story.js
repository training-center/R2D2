import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from './index';
import FormInput from '../Input';

storiesOf('Field')
  .add('default', () => (
    <Field label="Label" htmlFor="input">
      <FormInput name="input" />
    </Field>
  ))
  .add('helper', () => (
    <Field label="Label" helper="additional message" htmlFor="input">
      <FormInput name="input" />
    </Field>
  ))
  .add('invalid', () => (
    <Field
      label="Label"
      helper="additional message"
      state="invalid"
      htmlFor="input"
    >
      <FormInput state="invalid" name="input" />
    </Field>
  ))
  .add('valid', () => (
    <Field
      label="Label"
      helper="additional message"
      state="valid"
      htmlFor="input"
    >
      <FormInput state="valid" name="input" />
    </Field>
  ));

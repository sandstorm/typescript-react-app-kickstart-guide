import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Template from '.';

storiesOf('Template', module)
  .add('default', () => (
    <Template/>
  ))
  .add('with template prop', () => (
    <Template template="Dude"/>
  ));

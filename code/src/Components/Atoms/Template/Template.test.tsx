import * as React from 'react';
import {render} from 'react-dom';
import * as ReactTestRenderer from 'react-test-renderer';
import Template from '.';

describe('Template tests', () => {
  it('should render without crashing', () => {
    render(<Template/>, document.createElement('div'));
  });

  it('should match snapshot', () => {
    expect(ReactTestRenderer.create(<Template/>)).toMatchSnapshot();
  });

  it('should match snapshot with template props', () => {
    expect(ReactTestRenderer.create(<Template template="Dude"/>)).toMatchSnapshot();
  });
});

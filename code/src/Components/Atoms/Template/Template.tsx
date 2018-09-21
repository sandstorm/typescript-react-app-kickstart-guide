import * as React from 'react';
import {PickDefaultProps} from 'types/defaultProps';

//
// Props
//
interface TemplateProps {
  readonly template: string;
}

type DefaultProps = PickDefaultProps<TemplateProps, 'template'>;

const defaultProps: DefaultProps = {
  template: 'Bro',
};

//
// State
//
interface TemplateState {
  readonly isCool: boolean;
}

const initialState: TemplateState = {
  isCool: true,
};

//
// Class
//
export default class Template extends React.PureComponent<TemplateProps, TemplateState> {
  public static readonly defaultProps = defaultProps;

  public constructor(props: TemplateProps) {
    super(props);
    this.state = initialState;
  }

  public render(): JSX.Element {
    return (
      <div className="template">
        <p>{this.getMessage()}</p>
        <p>{Template.getPureMessage(this.state.isCool, this.props.template)}</p>
        <p>{getPureMessageFromTheOutside(this.state.isCool, this.props.template)}</p>
      </div>
    );
  }

  private readonly getMessage = (): string => `Hey, ${this.state.isCool ? 'cool ' : ''}${this.props.template}!`;

  private static getPureMessage(isCool: boolean, template: string): string {
    return `Hey, ${isCool ? 'cool ' : ''}${template}!`;
  }
}

//
// Pure utility functions.
//

// It's almost always better to put them somewhere more 'global' (like 'src/Domain/')  where they can be shared and tested.
// Only put them here if they are really reeaally component specific.

function getPureMessageFromTheOutside(isCool: boolean, template: string): string {
  return `Hey, ${isCool ? 'cool ' : ''}${template}!`;
}

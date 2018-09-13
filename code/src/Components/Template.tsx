import * as React from 'react';
import {PickDefaultProps} from 'types/defaultProps';

interface ITemplateProps {
  readonly template: string;
}

type DefaultProps = PickDefaultProps<ITemplateProps, 'template'>;

interface ITemplateState {
  readonly isCool: boolean;
}

const initialTemplateState: ITemplateState = {
  isCool: true,
};

export default class Template extends React.PureComponent<ITemplateProps, ITemplateState> {
  public static readonly defaultProps: DefaultProps = {
    template: 'Bro!',
  };

  public constructor(props: ITemplateProps) {
    super(props);
    this.state = initialTemplateState;
  }

  public render(): JSX.Element {
    return (
      <div>
        <p>{this.getMessage()}</p>
        <p>{Template.getPureMessage(this.state.isCool, this.props.template)}</p>
        <p>{getPureMessageFromTheOutside(this.state.isCool, this.props.template)}</p>
      </div>
    );
  }

  private readonly getMessage = (): string => `Hey, ${this.state.isCool ? 'cool ' : ''}${this.props.template}`;

  private static getPureMessage(isCool: boolean, template: string): string {
    return `Hey, ${isCool ? 'cool ' : ''}${template}`;
  }
}

function getPureMessageFromTheOutside(isCool: boolean, template: string): string {
  return `Hey, ${isCool ? 'cool ' : ''}${template}`;
}

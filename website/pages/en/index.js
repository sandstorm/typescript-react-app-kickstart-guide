/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('kickstart/create-boilerplate')}>Get Started</Button>
            <Button 
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noreferrer noopener">
              Github
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const codeBlock = "```";
const code = "`";
const readme_markdown = (baseUrl) => `
  ## Prerequisites

  These tools are needed to start developing.

  ${codeBlock}bash
  # node version management
  brew install nvm

  # node (latest lts version)
  nvm install --lts

  # yarn
  brew install yarn --without-node
  ${codeBlock}

  ## Editor
  We recommend to use [VSCode](https://code.visualstudio.com/) as editor. 
  Install the following Extensions:
  * ${code}TSLint${code} -> linting support directly in editor ([marketplace](https://marketplace.visualstudio.com/items?itemName=eg2.tslint))
  * ${code}Type safe React & Redux Snippets in TypeScript${code} -> Snippets for boilerplate code as shown in Cookbook ([marketplace](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets))

  ## Cookbook
  In the cookbook you will find skeletons for important modules. These skeletons are also available for VSCode as snippets in the VSCode [marketplace](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets).

  ## Example (Component with defaultProps)

  > Look, Ma' - Intellisense!

  <img alt="component with defaultProps example" src="${baseUrl}img/autocompletion.gif" style="max-height: 90vh;">
`;

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const FeatureCallout = () => (
      <div
        style={{backgroundColor: '#fff'}}>
        <div style={{maxWidth: '1200px', margin: 'auto', padding: '24px 0'}}>
          <MarkdownBlock>{readme_markdown(baseUrl)}</MarkdownBlock>
        </div>
      </div>
    );

    return (
      <div style={{backgroundColor: '#f5fcff'}}>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer" style={{padding: 0}}>
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;

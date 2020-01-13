import React from 'react';

const Header = window.styled.header`
  background-color: #9933cc;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Article = window.styled.article`
  flex: 200px;
  padding: 0;
  margin: 5px;
  background: aqua;
`;

const H1 = window.styled.h1`
  font: small-caps bold 24px/1 sans-serif;
  font-size: 2.5em;
  margin: 5px;
`;

const Form = window.styled.form`

`;


class Title extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <Header>
        <Article><H1>{this.props.title}</H1></Article>
        <Article></Article>
      </Header>);
  }
}

export default Title;

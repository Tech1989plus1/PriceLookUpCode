import React from 'react';
import Title from './Title.jsx';

const Div = window.styled.div``;

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <Div>
        <Title title={'Plu.Bakery.Orange'} search={this.state}/>
      </Div>);
  }
}

export default App;

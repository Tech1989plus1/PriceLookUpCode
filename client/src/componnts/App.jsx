import React from 'react';
import Title from './Title.jsx';

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
      <div>
        <Title title={'Plu.Bakery.Orange'} search={this.state}/>
      </div>);
  }
}

export default App;

import React from 'react';
import Title from './Title.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    }
    this.search = this.search.bind(this);
  }

  search(item){
    console.log(item);
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>
        <Title title={'Plu.Bakery.Orange'} searchCB={this.search}/>
      </div>);
  }
}

export default App;

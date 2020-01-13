import React from 'react';
import Title from './Title.jsx';
import Recent from './Recent.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: 'home',
    }
    this.search = this.search.bind(this);
  }

  search(item){
    console.log(item);
  }

  renderView(){
    const { view } = this.state;
    
    if (view === 'home') {
      return (
        <Recent/>
      );
    }
  }

  componentDidMount(){
    
  }

  render() {
    return(
      <div>
        <Title title={'Plu.Bakery.Orange'} searchCB={this.search}/>
        <div className='container-body'>
          {this.renderView()}
        </div>
      </div>);
  }
}

export default App;

import React from 'react';
import { ajax } from 'jquery';
import Title from './Title.jsx';
import Recent from './Recent.jsx';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: 'home',
      recent: []
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
        <Recent recent={this.state.recent}/>
      );
    }
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: '/plu',
      error: (err) => console.error(err),
      success: (data) => {
        this.setState({recent: data});
      }
    });
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

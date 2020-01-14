import React from 'react';
import { ajax } from 'jquery';
import Title from './Title.jsx';
import Recent from './Recent.jsx';
import Category from './Category.jsx';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      view: 'category',
      recent: []
    }
    this.search = this.search.bind(this);
  }

  search(item){
    console.log(item);
  }

  uniqueIdentifier(uid){
    console.log(uid);
  }

  category(view){
    console.log(view);
  }

  renderView(){
    const { view } = this.state;
    
    if (view === 'category') {
      return ( <Category categorycb={this.category}/> );
    } else if (view === 'produce') {
      return ();
    } else if (view === 'bulk') {
      return ();
    } else if (view === 'bakery') {
      return ();
    } else if (view === 'culinary') {
      return ();
    } else {
      return ( <Category categorycb={this.category}/> );
    }
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: '/plu',
      error: (err) => console.error(err),
      success: (data) => {
        this.setState({recent: data.slice(0,4)});
      }
    });
  }

  render() {
    return(
      <div>
        <Title title={'Plu'} searchCB={this.search} categorycb={this.category}/>
        <div className="containerBody">
          <Recent recent={this.state.recent} uidcb={this.uniqueIdentifier}/>
          {this.renderView()}
        </div>
      </div>);
  }
}

export default App;

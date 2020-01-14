import React from 'react';

class Category extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const { id } = event.target;
    const { categorycb } = this.props;
    categorycb(id);
  };

  render(){
    return (
      <div className="categoryContainer">
        <h3>Categories</h3>
        <form onClick={this.handleClick}>
            <div className="categoryColumn">
              <div className="categoryRow">
                <h3 id="Produce">Produce</h3>
                <h3 id="Bulk">Bulk</h3>
              </div>
              <div className="categoryRow">
                <h3 id="Bakery">Bakery</h3>
                <h3 id="Culinary">Culinary</h3>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Category;

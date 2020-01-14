import React from 'react';

class RecentView extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const { item } = this.props;
    this.props.uidcb(item._id);
  };

  render() {
    return(
      <div className="recentView">
        <form onClick={this.handleClick}>
          <div className="recentItem">
            <h4>{this.props.item.name}</h4>
            <h4># {this.props.item.plu}</h4>
          </div>
        </form>
      </div>
    );
  }
}

export default RecentView;
import React from 'react'

class Title extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className='topnav'>
      <a className="active" href="#home">{this.props.title}</a>
      <form className="search-container">
        <input type="text" placeholder="Search..." name="search"/>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>);
  }
}

export default Title;

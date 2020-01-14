import React from 'react'

class Title extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    const { search } = this.state;
    this.props.searchCB(search);

    event.preventDefault();
  }

  handleClick(event){
    const { id } = event.target;
    const { categorycb } = this.props;
    categorycb(id);
  };

  
  render() {
    return(
    <div className='topnav'>
      <a className="active" id="category" onClick={this.handleClick}>{this.props.title}</a>
      <form className="search-container">
        <input type="text" placeholder="Search..." name="search" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}><i className="fa fa-search"></i></button>
      </form>
    </div>);
  }
}

export default Title;

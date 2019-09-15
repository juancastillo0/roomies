import React from 'react';


class TodoPreview extends React.Component{
  constructor(props){
    super(props)

    this.state={
      todoprint: ""
    }
  }

  render(){  
    console.log(this.props);
    return (
    <div className="row">
      <input type="text" id="box-donetodo" aria-describedby="helpId" readOnly value={this.state.todoprint}/>
    </div>)};
}

export default TodoPreview;

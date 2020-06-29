import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import ContentLeft from './components/ContentLeft';
import FormUser from './components/FormUser';
import Data from './Data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      statusEdit:false,
      data:Data,
      searchText:'',
      dataEdit:'',
    }
  }
  changeStatus(){
    this.setState({
      showContentRight:!this.state.showContentRight
    })
  }
  getTextSearch(val){
    this.setState({
      searchText:val
    })
  }

  addNewData=(name,permission)=>{
    var item={};
    item.id="";
    item.name=name;
    item.permission=permission;
    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    
  }
  submitEdit=()=>{
    this.setState({
      statusEdit:!this.state.statusEdit,
    })
  }
  editUser=(value)=>{
    this.setState({
      statusEdit:true,
      dataEdit:value
    })
    // console.log(this.state.showFormEdit);  
  }
  deleteUser=(value)=>{
    var tempData = this.state.data.filter(item=>item.id!=value.id)

    this.setState({
      data:tempData
    })
  }
  getInfoEditFunc(info){
    console.log('edit o app.js' + info.id);
    this.state.data.map(value=>{
      if(value.id===info.id){
        value.name=info.name;
        value.permission=info.permission
      }
    })
  }
  render() {
    var result=[];
    this.state.data.map(item=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item)
      }
    })
    return (
      <div className="container">
      <Top  changeStatus={()=>this.changeStatus()} 
            status={this.state.showContentRight} 
            ConnectValSearch={(val) => this.getTextSearch(val)}
            dataEdit={this.state.dataEdit}
            editUser={(value) => this.editUser(value)}
            submitEdit={() => this.submitEdit()}
            statusEdit={this.state.statusEdit}
            getInfoEdit={(info)=>this.getInfoEditFunc(info)}
            />
      <div className="bodyContent row">
        <ContentLeft 
        dataUser={result} 
        editUser={(value) => this.editUser(value)}
        deleteUser={(value)=>this.deleteUser(value)}
        />
        { this.state.showContentRight && (
          <FormUser 
          Title="Add User"
          SubmitTitle="Add"
          Gird="col-md-3"
          add={(name,permission) =>this.addNewData(name,permission)}
          />
        )}
        </div>
    </div>
    );
  }
}


export default App;

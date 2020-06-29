import React, { Component, Fragment } from 'react';

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.dataEdit ? this.props.dataEdit.id : '',
            name:this.props.dataEdit ? this.props.dataEdit.name : '',
            permission:this.props.dataEdit ? this.props.dataEdit.permission : '',
        }
    }
    addData=(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
           [name]:value
        });
    }
    actionForm=(event)=>{
        if(this.props.dataEdit){
            this.props.submitEdit()
        }
        else{
            this.props.add(this.state.name,this.state.permission);
        } 
        
        const dataUser = this.state;
        
        var info = {};
        info.id=dataUser.id;
        info.name=dataUser.name;
        info.permission=dataUser.permission;
        console.log(info);
        
        this.props.getInfoEdit(info);
        
    }
    renderForm(){
        const name = this.state.name;
        const permission = this.state.permission;
        const {Title,Gird,SubmitTitle,dataEdit} = this.props
            return(
                       <div className={Gird} >
                        <div className="card">
                        <div className="card-header">{Title}</div>
                            <div className="card-body">
                            <div className="form-group">
                                <input type="text" name="name" defaultValue={dataEdit ? dataEdit.name : ''} className="form-control" placeholder="Name" aria-describedby="helpId" onChange={(event)=>this.addData(event)}/>                     
                            </div>
                            <div className="form-group">
                            <select id="inputState" value={dataEdit ? dataEdit.permission : ''} className="form-control" name="permission"  onChange={(event)=>this.addData(event)}>
                                <option selected>Choose...</option>
                                <option value={1}>admin</option>
                                <option value={2}>user</option>
                            </select>
                            </div>
                            <div className="form-inline">
                                <button type="submit" className="btn btn-primary btn-block" onClick={(event)=>this.actionForm(event)}>{SubmitTitle}</button>
                            </div>
                            </div>
                        </div>
                        </div>
            )
        }
        render() {
            return  this.renderForm()
        }
    }


export default FormUser;
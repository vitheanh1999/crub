import React, { Component } from 'react';
import FormUser from './FormUser';

class Top extends Component {
    constructor(props) {
        super(props);
        this.state=({
            showContentRight:false,
            showButton:false,
            valSearch:''
        })
    }
    ShowButton(){
        this.setState({
            showButton:!this.showButton
        })
    }
    renderButton(){
        if(this.props.status==false){
            return(
                <div className="btn bnt-block btn-outline-primary" onClick={()=>this.props.changeStatus()}>Add</div>
            )
        }
        else 
        return(
            <div className="btn bnt-block btn-outline-danger" onClick={()=>this.props.changeStatus()}>Close</div>
        )
    }
    isChange(event){
        this.setState({
            valSearch:event.target.value
        });
        this.props.ConnectValSearch(this.state.valSearch)
    }
    
    render() {
        const { val,showContentRight} = this.state;
        const {dataEdit,statusEdit,editUser,submitEdit,getInfoEdit} = this.props;
        return (
         <div className="topHeader">
             <div className="form-inline">
             <div className="form-group form-inline">
                <input type="text" className="form-control" placeholder="First name" onChange={(event)=>this.isChange(event)}/>
                <button type="submit" className="btn btn-primary" onClick={(valSearch)=>this.props.ConnectValSearch(this.state.valSearch)}>Search<i className="fa fa-search" aria-hidden="true" /></button>
                
            </div>
            <div className="btn-group">
           {this.renderButton()}
            </div>
             </div>
             {statusEdit && (
                <FormUser
                dataEdit={dataEdit}
                Title="Edit User"
                SubmitTitle="Edit"
                editUser={editUser}
                submitEdit={submitEdit}
                getInfoEdit={getInfoEdit}
                ></FormUser>
                
             )}
       
        </div>

        );
    }
}

export default Top;
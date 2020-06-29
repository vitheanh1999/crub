import React, { Component } from 'react';

class TableBody extends Component {
    permissionShow=(per)=>{
        if(per==1){
            return "Admin"
        }
        else{
            return "User"
        }
    }
    editUserFunc=(value)=>{
        this.props.editUser(value);
    }
    deleteUserFunc=(value)=>{
        this.props.deleteUser(value);
    }
    render() {
        const {dataUser} = this.props;
        return (
            <tbody>
            {
                dataUser.map((value,key)=>(

                    <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{this.permissionShow(value.permission)}</td>
                    <td>
                    <div className="form-group">
                        <button className="btn btn-danger" onClick={(user) => this.deleteUserFunc(value)}>Delete</button>
                        <button className="btn btn-primary" onClick={(user)=>this.editUserFunc(value)}>Edit</button>
                    </div>
                    </td>
                    </tr>
                ))
            }
        </tbody>
        );
    }
}

export default TableBody;

import React, { Component } from 'react';
import TableBody from './TableBody';

class ContentLeft extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {dataUser} = this.props;
        return (
        <div className="contentLeft col-md-9">
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Permission</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <TableBody 
            dataUser={dataUser} 
            editUser={(value)=>this.props.editUser(value)}
            deleteUser={(value)=>this.props.deleteUser(value)}
            >

            </TableBody>
        </table>
        </div>

        );
    }
}

export default ContentLeft;
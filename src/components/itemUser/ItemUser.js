import React, { Component } from 'react';


class ItemUser extends Component {
    render() {
        var { user, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.avatar}</td>
                <td>{user.numberPhone}</td>
                <td>{user.email}</td>
                <td>
                    <button type="button" className="btn btn-success mr-10">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>

            </tr>

        );
    }
}

export default ItemUser;

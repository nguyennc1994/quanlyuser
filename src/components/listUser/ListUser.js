import React, { Component } from 'react';

class ListUser extends Component {
  render() {
        return (
            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách người dùng</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Mã</th>
                                                <th>Tên</th>
                                                <th>Ảnh đại diện</th>
                                                <th>Số điện thoại</th>
                                                <th>Email</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.children}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
            );
    }
}

export default ListUser;

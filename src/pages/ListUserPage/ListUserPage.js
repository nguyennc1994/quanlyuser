import React, { Component } from 'react';
import ListUser from './../../components/listUser/ListUser';
import ItemUser from './../../components/itemUser/ItemUser';
import { connect } from 'react-redux';
// import {axios} from 'axios';

class ListUserPage extends Component {
    render() {
        // var { users } = this.props;

        // var users = [];
        // axios({
        //     method: 'GET',
        //     url: 'http://5c8238742d2ad30014be5124.mockapi.io/api/users',
        //     data: null,
        // }).then(res => {
        //     console.log(res);
        //     users = res.data;
        // }).catch(err => {
        //     console.log(err);
        // });



        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Thêm người dùng</button>

                <ListUser>
                    {this.showUsers(users)}
                </ListUser>
            </div>
        );
    }

    showUsers(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <ItemUser
                        key={index}
                        user={user}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(ListUserPage);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class newProduct extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hola {user.firstName}!</h1>
                <p>Aquí puede añadir un nuevo producto</p>
                <div className="form-group">
                    
                        <Link to="/homepage" className="btn btn-link">Cancelar</Link>
                    </div>
            </div>
            
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectednewProduct = connect(mapState, actionCreators)(newProduct);
export { connectednewProduct as newProduct };
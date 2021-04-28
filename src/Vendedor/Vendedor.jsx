import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Vendedor extends React.Component {
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
                <p>Usted está registrado como vendedor</p>
                
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <p>
                    <Link to="/historialVendedor">Historial de Pedidos</Link>
                </p>
                <p>
                    <Link to="/newProduct">Añadir producto</Link>
                </p>
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

const connectedVendedor = connect(mapState, actionCreators)(Vendedor);
export { connectedVendedor as Vendedor };
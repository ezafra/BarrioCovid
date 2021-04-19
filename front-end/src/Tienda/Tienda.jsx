import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Tienda extends React.Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            correo: '',
            password: '',
            isSeller: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { correo, password, isSeller } = this.state;
        if (correo && password) {
            this.props.login(correo, password, isSeller);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>NuevoProducto</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">El nombre es obligatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Apellidos</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Al menos un apellido es obligatorio</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.correo ? ' has-error' : '')}>
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input type="text" className="form-control" name="correo" value={user.correo} onChange={this.handleChange} />
                        {submitted && !user.correo &&
                            <div className="help-block">El correo es obligatorio</div>
                        }
                    </div>
                    
                    <div className={'form-group' + (submitted && !user.dni ? ' has-error' : '')}>
                        <label htmlFor="dni">Dni</label>
                        <input type="text" className="form-control" name="dni" value={user.dni} onChange={this.handleChange} />
                        {submitted && !user.dni &&
                            <div className="help-block">dni es obligatorio</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.direccion ? ' has-error' : '')}>
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" className="form-control" name="direccion" value={user.direccion} onChange={this.handleChange} />
                        {submitted && !user.direccion &&
                            <div className="help-block">direccion es obligatorio</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password es obligatorio</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted  ? ' has-error' : '')}>
                        <label htmlFor="isSeller">Es vendedor</label>
                        <input type="password" className="form-control" name="isSeller" value={user.isSeller} onChange={this.handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" >RegisterVendor</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }

                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedTienda = connect(mapState, actionCreators)(Tienda);
export { connectedTienda as Tienda };
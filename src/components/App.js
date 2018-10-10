import { Component } from 'react'
import PropTypes from 'prop-types';
import '../../stylesheets/APP.scss'
import { Menu, NewColor, Colors } from './containers';

class App extends Component {
    // add context named 'store' to component
    // Any children of the App component will have access to the 'store' via context
    // need to define childContextTypes below. Otherwise, context won't work
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        // need to listen to the store so that it can trigger UI update when the state changes
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnMount() {
        // stop listening to the store
        this.unsubscribe();
    }

    render() {
        return (
            <div className='app'>
                <Menu />
                <NewColor />
                <Colors />
            </div>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App;
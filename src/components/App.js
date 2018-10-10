import { Component } from 'react'
import PropTypes from 'prop-types';
import AddColorForm from './AddColorForm'
import SortMenu from './SortMenu';
import ColorList from './ColorList'
import '../../stylesheets/APP.scss'
import { sortFunction } from '../lib/array-helpers';

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
        const { colors, sort } = store.getState()

        const sortedColors = [...colors].sort(sortFunction(sort));

        return (
            <div className='app'>
                {/* <SortMenu /> */}
                <AddColorForm />
                <ColorList colors={sortedColors}/>
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
import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa';
import '../../stylesheets/Color.scss'
import { rateColor, removeColor } from '../actions';

class Color extends Component {
    render() {
        const { id, title, color, rating, timestamp } = this.props

        const { store } = this.context;

        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>

                <button onClick={() =>
                    store.dispatch(removeColor(id))
                }>
                    <FaTrash />
                </button>
                
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                
                <div>
                    <StarRating starsSelected={rating} onRate={rating => 
                        store.dispatch(rateColor(id, rating))
                    } />
                </div>
            </section>
        )
    }
}

Color.contextTypes = {
    store: PropTypes.object
}

Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

Color.defaultProps = {
    rating: 0
}

export default Color

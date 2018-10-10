import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa';
import '../../../stylesheets/Color.scss'

class Color extends Component {
    render() {
        const { id, title, color, rating, timestamp, onRemove, onRate } = this.props

        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>

                <button onClick={onRemove}>
                    <FaTrash />
                </button>
                
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                
                <div>
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}

export default Color

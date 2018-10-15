import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa';
import '../../../stylesheets/Color.scss'

class Color extends Component {
    componentWillMount() {
        this.style = { backgroundColor: '#CCC' };
    }

    componentWillUpdate(nextProps) {
        this.style = null;

        const { title, rating } = this.props;
        
        this.refs.title.style.backgroundColor = 'red';
        this.refs.title.style.color = 'white';

        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    // improve performance by only updating the component where the rating has changed
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);

    }

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

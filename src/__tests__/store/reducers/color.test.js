import C from '../../../constants'
import { color } from '../../../store/reducers'

describe('color Reducer', () => {
    it('ADD_COLOR success', () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90C3C4',
            timestamp: new Date().toString()
        }

        const results = color(state, action);

        expect(results)
            .toEqual({
                id: action.id, 
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            })
    })

    it('RATE_COLOR success', () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3C4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800',
            rating: undefined
        }

        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }

        const results = color(state, action)

        expect(results)
            .toEqual({
                id: action.id,
                title: state.title,
                color: state.color,
                timestamp: state.timestamp,
                rating: action.rating
            })
    })
})
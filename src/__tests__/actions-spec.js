import C from '../constants'
import storeFactory from '../store'
import { addColor } from '../actions'
import stateData from '../../data/initialState'

describe('addColor', () => {
    let store

    const colors = stateData.colors

    beforeAll(() => {
        store = storeFactory({colors});
        store.dispatch(addColor('Dark Blue', '#000033'))
    })

    it('should add a new color', () => {
        expect(store.getState().colors.length).toBe(5)
    })

    it('should add a unique guid', () => {
        expect(store.getState().colors[4].id.length).toBe(36)
    })

    it('should set the rating to 0', () => {
        expect(store.getState().colors[4].rating).toBe(0)
    })

    it('should set timestamp', () => {
        expect(store.getState().colors[4].timestamp).toBeDefined()
    })
})
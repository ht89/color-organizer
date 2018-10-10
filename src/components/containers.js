/* 
    All of the Redux functionality is connected here (action creators, store.getState & store.dispatch)
*/

import { connect } from 'react-redux';
import AddColorForm from './ui/AddColorForm';
import SortMenu from './ui/SortMenu';
import ColorList from './ui/ColorList';
import {
    addColor,
    sortColors,
    rateColor,
    removeColor
} from '../actions';
import { sortFunction } from '../lib/array-helpers';

export const NewColor = connect(
    null,
    dispatch => 
    ({
        onNewColor(title, color) {
            dispatch(addColor(title, color))
        }
    })
) (AddColorForm)

export const Menu = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(sortColors(sortBy))
            }
        })
) (SortMenu)

export const Colors = connect(
    state =>
        ({
            colors: [...state.colors].sort(sortFunction(state.sort))
        }),
    dispatch =>
        ({
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            },
            onRemove(id) {
                dispatch(removeColor(id))
            }
        })
) (ColorList)
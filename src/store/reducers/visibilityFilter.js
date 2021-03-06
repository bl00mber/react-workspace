import { VisibilityFilters } from '@/store/actions';
import { SET_VISIBILITY_FILTER } from '@/store/actionTypes';

const { SHOW_ALL } = VisibilityFilters;

export default (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  TOGGLE_FLAG,
  SET_CELSIUS,
  SET_FAHRENHEIT,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '@/store/actionTypes';

describe('actionTypes', () => {
  test('should have all exports', () => {
    expect(ADD_TODO).toBe('ADD_TODO');
    expect(TOGGLE_TODO).toBe('TOGGLE_TODO');
    expect(SET_VISIBILITY_FILTER).toBe('SET_VISIBILITY_FILTER');
    expect(INCREMENT_COUNTER).toBe('INCREMENT_COUNTER');
    expect(DECREMENT_COUNTER).toBe('DECREMENT_COUNTER');
    expect(TOGGLE_FLAG).toBe('TOGGLE_FLAG');
    expect(SET_CELSIUS).toBe('SET_CELSIUS');
    expect(SET_FAHRENHEIT).toBe('SET_FAHRENHEIT');
    expect(FETCH_POSTS_REQUEST).toBe('FETCH_POSTS_REQUEST');
    expect(FETCH_POSTS_FAILURE).toBe('FETCH_POSTS_FAILURE');
    expect(FETCH_POSTS_SUCCESS).toBe('FETCH_POSTS_SUCCESS');
  });
});
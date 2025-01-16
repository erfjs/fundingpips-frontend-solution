import settingReducer, { setStockType } from './settingSlice';

describe('settingSlice', () => {
  const initialState: { stockType: 'all' | 'favorite' } = { stockType: 'all' };

  it('should return the initial state', () => {
    expect(settingReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should set stockType to "favorite"', () => {
    const action = setStockType('favorite');
    const nextState = settingReducer(initialState, action);
    expect(nextState.stockType).toBe('favorite');
  });

  it('should set stockType to "all"', () => {
    const action = setStockType('all');
    const nextState = settingReducer({ stockType: 'favorite' }, action);
    expect(nextState.stockType).toBe('all');
  });
});

# Testing Reducers

```javascript
import reducers, { INITIAL_STATE } from '~/store/modules/items/reducer';
import * as Items from '~/store/modules/items/actions';

describe('Items reducer', () => {
  it('ADD_ITEM', () => {
    const state = reducers(INITIAL_STATE, Items.addItem('Notebook'));

    expect(state).toStrictEqual(['Notebook']);
  })
});
``` 

## Sources:
Rockseat GoStack - React Tests - Testing Reducers
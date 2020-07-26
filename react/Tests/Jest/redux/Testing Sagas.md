# Testing Sagas

```javascript
import { runSaga } from 'redux-saga';

import { getItemsSuccess } from '~/store/modules/items/actions';
import { getItems } from '~/store/modules/items/sagas';

describe('Items Saga', () => {
  it('should be able to fetch items', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getItems).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getItemsSuccess(['Notebook']));
  });
});
```

## Sources:
Rockseat GoStack - React Tests - Testing Sagas
# Testing Sagas

```javascript
import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { getItemsSuccess, getItemsFailure } from '~/store/modules/items/actions';
import { getItems } from '~/store/modules/items/sagas';

const apiMock = new MockAdapter(api);

describe('Items Saga', () => {
  it('should be able to fetch items', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('items').reply(200, ['Notebook']);

    await runSaga({ dispatch }, getItems).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getItemsSuccess(['Notebook']));
  });
});
```

## Sources:
Rockseat GoStack - React Tests - Testing Sagas
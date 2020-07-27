# Axios Mock

1. Install: 
```
yarn add axios-mock-adapter -D 
```
2. Example:
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

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('items').reply(500);

    await runSaga({ dispatch }, getItems).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getItemsFailure());
  });
});
```

## Sources:
Rockseat GoStack - React Tests - Axios Mock
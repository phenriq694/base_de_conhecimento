# useDispatch

```javascript
import React from 'react';
import { useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { addItem }from '../../store/modules/items/actions';

import ShopList from '~/components/ShopList';

jest.mock('react-redux');

  it('should be able to add new item', () => {
    const { getByTestId, getByLabelText } = render(<ShopList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Item'), { target: { value: 'Notebook' } });
    fireEvent.submit(getByTestId('item-form'));

    expect(dispatch).toHaveBeenCalledWith(addItem('Notebook'));
  });
});
```

## Sources:
Rockseat GoStack - React Tests - useDispatch Mock
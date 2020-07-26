# useSelector Mock

1. Declare the redux mock;
2. With the 'mockImplementation', simulate the 'useSelector' behavior;
3. Example: 
```javascript
import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import ShopList from '~/components/ShopList';

jest.mock('react-redux'); // 1

describe('ShopList component', () => {
  it('should render shop list', () => {
    useSelector.mockImplementation(cb => cb({ // 2
      items: ['Notebook', 'iPhone']
    }));

    const { getByText, getByTestId } = render(<ShopList />);

    expect(getByTestId('item-list')).toContainElement(getByText('Notebook'));
    expect(getByTestId('item-list')).toContainElement(getByText('iPhone'));    
  });
});
```

## Sources:
Rockseat GoStack - React Tests - useSelector Mock
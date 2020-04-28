# Using immer to handle with immutables objects 

1. Install lib:
```bash
yarn add immer
```
2. Import the function 'produce' from the lib 'immer' to the reducer. This function will create a draft from the reducer state and return an array or object mutable, facilitating the manipulation of the state data. 
```javascript
import produce from 'immer'; // 1

export default function cart(state = [], action) {
  switch(action.type) { 
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ 
            ...action.product,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}
```
3. If the ESLint found the error 'Assignment to property of function parameter', add the following code to the 'eslintconfig.js' file in 'rules':
```javascript
{ 
  'no-param-reassign': 'off'
}
```

## Sources:
- Rockseat GoStack - Module Flux Architecture - Duplicate Products.
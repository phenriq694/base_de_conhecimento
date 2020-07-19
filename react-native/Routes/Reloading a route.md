# Reloading a Route

1. If it's necessary reload a route, we can use the 'withNavigationFocus' function from the 'react-navigation' lib:
```javascript
import { withNavigationFocus } from 'react-navigation';
```
2. Destruct the 'isFocused' value of the component's props;
```javascript
function Dashboard({ isFocused }) {
  // component content 
}
```
3. Add the following 'useEffect':
```javascript
  useEffect(() => {
    if (isFocused) {
      // Content to reloading
    }
  }, [isFocused]);
```
4. Move the 'export default' expression to the end of the file using the imported function and passing the component as params:
```javascript
export default withNavigationFocus(Dashboard);
```
4. Every time this route was accessed, it will be reloaded;
5. Example in a project: https://github.com/phenriq694/GoStack_Modulos/blob/goStack_modulos_2019/module10/mobile/src/pages/Dashboard/index.js

## Sources:
Rockseat GoStack - Module GoBarber Mobile - Reloading Appointments
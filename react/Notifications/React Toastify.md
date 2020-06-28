# React Toastfy
## How to add custom notifications to the application with react toastify
1. Install:
```
yarn add react-toastify
```
2. Import a component from the 'react-toastify' lib in the 'App.js' in the application:  
```javascript
import { ToastContainer } from 'react-toastify';
```
3. Add this component together with the other components in this file. In the following example, an attribute called 'autoClose' has been added with the time the notification will be displayed:
```javascript
<ToastContainer autoClose={3000} /> 
```
4. Import a 'css' file in the global style file in the application:
```javascript
import 'react-toastify/dist/ReactToastify.css'
```
5. Import a component from the 'react-toastify' lib in the file that needs the notification:
```javascript
import { toast } from 'react-toastify' 
```
6. To add a notification, use the component imported with the message that you want to show:
```javascript
toast.error('Authentication Error!')
```

## Sources:
Rockseat GoStack - Module GoBarber Web - Showing Toasts

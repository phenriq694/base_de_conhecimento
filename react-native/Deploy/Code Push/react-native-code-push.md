# react-native-code-push

1. Install:
```
yarn add react-native-code-push
```
2. Run:
```
react-native link react-native-code-push
```
3. In the main file of the project, add the following configuration: 
```javascript
import CodePush from 'react-native-code-push'; 

// File Content 

export default CondePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App); 
```

## Sources:
Rockseat GoStack - ReactJS and React Native Deploy - Configuring Code Push

# One Signal Configuration

<strong>Don't forget to check the lib documentation!</strong>

1. Install: 
```
yarn add react-native-onesignal
```
2. Run:
```
react-native link react-native-onesignal
```
3. In the 'android/app/src/main/AndroindManifest.xml' file, add 'android:launchMode="singleTop" in the 'activity' tag;
4. In the 'androind/app/build.gradle' file, add the following code at the top:
```
buildscript {
    repositories {
        maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
    }
    dependencies {
        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.6, 0.99.99]'
    }
}

apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'
```
5. In the main project file, add the following configuration:
```javascript
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal'; 

import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('app_key'); 

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  // Notification sent when the app is opened;
  onReceived = data => {};

  // Notification sent when the app is closed and directs the user to a specific route
  onOpened = notification => {};

  // Notification sent when the app is installed on a new device 
  onIds = id => {};

  return () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default CondePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(Index); 
```

## Sources:
Rockseat GoStack - ReactJS and React Native Deploy - Sending Push Notifications
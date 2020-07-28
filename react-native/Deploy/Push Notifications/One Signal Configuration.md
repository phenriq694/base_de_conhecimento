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
4. In the 'androind/app/build.gradle' file, add the following code at top:
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

## Sources:
Rockseat GoStack - ReactJS and React Native Deploy - Configuring Code Push
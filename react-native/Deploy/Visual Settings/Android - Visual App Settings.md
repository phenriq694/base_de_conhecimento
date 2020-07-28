# Android - Visual App Settings

## Change the name of the app
1. In the project, go to the android/app/src/main/res/values/strings.xml folder;
2. Add the app name between the <string> tags:
```xml
<resoucers>
  <string name="app_name">App Name</string>
</resources>
``` 
## App Icon
1. Access the website: https://apetools.webprofusion.com/#/tools/imagegorilla;
2. Add an 1024x1024 pixels png image; 
3. Select to generate the icon for Android and ios;
4. After downloading the icon, copy all files into the folder 'bundle/android/' and paste into the 'android/app/src/main/res/' project folder;
5. In this folder, delete all folders that start with 'mipmap';
6. In the file 'android/app/src/main/AndroidManifest.xml' change the attributes 'android:icon' and 'android:roundIcon' to '@drawable/icon';

## App Splashscreen
1. Create a file called 'colors.xml' into the 'android/app/src/main/res/values/' folder;
2. Add the following code to configure a background color to the splashscreen:
```xml
<?xml version="1.0" enconding="utf-8" ?>

<resources>
  <color name="primary">#000</color>
</resources>
```
3. Create a file called 'background_splash.xml' into the 'android/app/src/main/res/drawable/' folder;
4. Add the following code to configure the app splashscreen:
```xml
<?xml version="1.0" enconding="utf-8" ?>

<layer-list xmlns:android="http://schemas.androind.com/apk/res/android">
  <item android:drawable="@color/primary" />

  <item android:height="200dp" android:width:"200dp" android:drawable="@drawable/icon" android:gravity="center" />
</layer-list>
```
5. In the 'android/app/src/main/res/values/styles.xml' file, add the following code:
```xml
<resources>
  <!-- Base Application theme. -->
  <style name="AppThem" parent="Theme.AppCompat.Light.NoActionBar">
    <!-- Customize your theme here. -->
  </style>

  <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
    <item name="android:windowBackground">@drawable/background_splash</item>
  </style>
</resources>
```
6. In the 'android/app/src/main/AndroindManifest.xml', change the attribute 'android:theme="@style/SplashTheme"';

## Package ID
1. In the 'android/app/build.gradle', change the attribute 'applicationId' to the name of your package ID;



## Sources:
Rockseat GoStack - ReactJS and React Native Deploy - Visual Settings on Android
# Configuring Environment Android

1. In the 'android/app/build.gradle' file, add the following code into the 'buildTypes': 
```
buildTypes {
  debug {
    buildConfigField "String", "CODEPUSH_KEY", '""'
  }

  releaseStaging {
    buildConfigField "String", "CODEPUSH_KEY", '"Staging Key"'

    matchingFallbacks = ['debug', 'release']
  }

  release {
    minifyEnabled enabledProguardInReleaseBuilds
    proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"

    buildConfigFiled "String", "CODEPUSH_KEY", '"Production Key"'
  }
}
```
2. In the appcenter website, create an starndard deployments in the Distribute/CodePush menu;
3. Run:
```
appcenter codepush deployment list -a organization/appName-OS -k
```
4. In the 'android/app/src/main/java/com/appName/MainApplication.java' file, change the following configuration: 
```java
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG),
  );
}
```
## Sources:
Rockseat GoStack - ReactJS and React Native Deploy - Configuring Environment Android
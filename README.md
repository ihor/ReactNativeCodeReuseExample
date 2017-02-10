React Native Code Reuse
=======================
This example shows how to reuse code between different platforms when using React & React Native. It is based on the fact that React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components (see [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions)).

Each platform uses the corresponding ```index.js``` file as an entry point. All other code resides in the [app](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app) directory.
 
Each component is presented as a subpackage containing implementations for all platforms. For simple components which don't do any logic, we define only two views for web and mobile and load the relevant view in the subpackage index. Like in the [App](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/App) component.
 
 For components which have a different appearance for iOS and Android, we define two views with ```ios.js``` and ```android.js``` extensions each containing a platform specific code. Like in the [Title](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/Title) component.
 
 And for components which do some logic, we also add a component container to define that logic. In such case in the subpackage index, we load the container and it renders the view. For max code reuse, we can put all shared logic into the abstract container and put platform specific code into subclasses. Like in the [HelpButton](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/HelpButton) component.

Installation
============
1. Install [npm](https://www.npmjs.com/)
2. From the root directory of the repository execute ```npm i```

Run
===

### Web
From the root directory of the repository execute ```gulp serve```

### iOS
Execute ```react-native run-ios``` or open ```ios/ReactNativeCodeReuse.xcodeproj``` with XCode and run the project.

Screenshots
===========

![Screenshot 1](https://github.com/ihor/ReactNativeCodeReuseExample/blob/master/screenshots/react-native-code-reuse-1.png?raw=true)
![Screenshot 2](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/screenshots/react-native-code-reuse-2.png?raw=true)
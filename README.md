React Native Code Reuse
=======================
This example shows how to reuse code between different platforms when using React & React Native. It is based on the fact that React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components (see [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions)).

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
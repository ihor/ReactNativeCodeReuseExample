React Native Code Reuse
=======================
This example shows how to share code between different platforms (web, iOS and Android) when using React & React Native. It is based on the fact that React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components (see [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions)). I created this application as an example for my article [Code sharing between React and React Native applications](http://ihor.burlachenko.com/code-sharing-between-react-and-react-native-applications/).

Each platform uses the corresponding ```index.js``` file as an entry point. All other code resides in the [app](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app) directory.
 
For simple components which don't do any logic, we define views with ```.js```, ```.ios.js``` and ```.android.js``` extensions each containing a platform specific code. Like in the [Title](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/Title) component.
 
For components which do some logic, we add a container component to define that logic. In such case in the subpackage index, we load the container and it renders the view. For max code reuse, we can put all shared logic into the abstract container and put platform specific code into subclasses. Like in the [AboutButton](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/AboutButton) component.

For components which need to use Redux state and dispatch actions (connected components), we connect them once in the subpackage index and pass the received props to containers or views the same as previous components. You can check the example in the [HelpButton](https://github.com/ihor/ReactNativeCodeReuseExample/tree/master/app/components/HelpButton) component.

Installation
============
1. Install [npm](https://www.npmjs.com/)
2. From the root directory of the repository execute ```npm i```

Run
===

### Web
From the root directory of the repository execute ```gulp serve```

### iOS
From the root directory  execute ```react-native run-ios``` or open ```ios/ReactNativeCodeReuse.xcodeproj``` with XCode and run the project.

### Android
From the root directory  execute ```react-native run-android```

Screenshots
===========

![Screenshot 1](https://github.com/ihor/ReactNativeCodeReuseExample/blob/master/screenshots/react-native-code-reuse-1.png?raw=true)
![Screenshot 2](https://github.com/ihor/ReactNativeCodeReuseExample/blob/master/screenshots/react-native-code-reuse-2.png?raw=true)
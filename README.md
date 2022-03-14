# RNAspire - Mobile code challange in React Native

## App Definition

Here is our code challenge:
https://xd.adobe.com/view/9a3f7272-f4c1-4e65-9287-89ad0f353406-cf6c/screen/32774e24-445f-467c-99ca-4fdf570c8a09/

Implement Debit Card Screen and Set weekly spending limit screen.

## Tech Stack

This apps include the following rock-solid technical decisions out of the box:

- React Native
- React Navigation 6
- Redux

## Quick Start

Prerequisites:
- For React Native, make sure you're set up for React Native by following [React Native](https://reactnative.dev/docs/environment-setup) first

Run the CLI:

```bash
# Clone app code from below command:
git clone https://github.com/jigarbarot/RNAspire.git

# Go app folder
cd RNAspire

# Install packages:
npm install or yarn

# Install pod:
cd ios && pod install && cd ..

# Run app in ios
npx react-native run-ios 

# Run app in android
npx react-native run-android 
```

### Troubleshooting

The above commands may fail with various errors, depending on your operating system and dependency versions. Some troubleshooting steps to follow:

- Make sure you are using the LTS version of Node. This can be checked via the `node --version` command. If you require multiple Node versions on your system, install `nvm`, and then run `nvm install --lts`. At the time of writing, Node LTS is v14.x.x.
- If the installation fails because of an Xcode error (missing Xcode command line tools), the easiest way to install them is to run `sudo xcode-select --install` in your terminal.
- If Xcode and command line tools are already installed, but the installation complains about missing patch dependencies, you may need to switch the Xcode location to something else: `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

## Project Structure

The project's structure will look similar to this:

```
Project
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── app
│   ├── components
│   ├── navigations
│   ├── redux
│   │     ├──actions
│   │     ├──reducers
│   │     ├──configStore.js
│   ├── screens
│   ├── theme
│   ├── utils
├── assets
├── ios
│   ├── Resources
│   ├── RNAspireApp
│   ├── RNAspireApp.xcworkspace
│   ├── RNAspireApp.xcodeproj
│   └── RNAspireAppTests
├── App.js
├── app.json
├── README.md
├── index.js
├── Gemfile
└── package.json

```

### ./app directory
The inside of the src directory looks similar to the following:

```
app
├── components
├── navigations
├── redux
│     ├──actions
│     ├──reducers
│     ├──configStore.js
```

**components**
This is where your React components will live. Each component will have a directory containing the `.js` file, The app will come with some commonly used components like Header.

**navigation**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with any assets or other helper files.

**redux**
This is where your app store create, actions and reducers code was written for state management.  

**theme**
Here lives the theme for your application, including colors, and font family.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like constants, formatters, scale, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**App.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application. This is also where you will specify whether you want to run the app in storybook mode.
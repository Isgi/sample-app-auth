# sample-app-auth

Sample App Auth is app auth with React Native and NodeJS API that support username and password authentication with JWTs.

<div align="center">
  <img src="https://github.com/Isgi/sample-app-auth/blob/master/demo.gif?raw=true" width="300">&nbsp;&nbsp;&nbsp;&nbsp;
</div>

### Quick Start

1. General Requirements Software (Backend & Frontend)

- Install NodeJS
- Install react-native-cli

2. Backend - NodeJS, clone this repository https://github.com/auth0-blog/nodejs-jwt-authentication-sample

a. install dependency
```
//make sure you have entered into the application repository
# npm install
```

b. start server
```
# npm run start
```

3. Frontend - React Native, clone this repository https://github.com/Isgi/sample-app-auth.git

a. install dependency
```
//make sure you have entered into the application repository
# npm install
```

b. run app
```
//make sure the nodeJS server is already running

//for android
# react-native run-android

//for ios
# react-native run-ios
```

`note: change apiUrl in /src/utils/apiUrl.js with your loacal ip address and port server nodeJS`

### Tech Stacks

Backend:

- NodeJS
- [Json Web Tokens](https://docs.auth0.com/jwt)
- sample API with nodejs-jwt-authentication-sample, more detail (https://github.com/auth0-blog/nodejs-jwt-authentication-sample)

React Native:

- [react-navigation](https://reactnavigation.org/) with redux, example app : https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample
- [redux](https://redux.js.org/)
- [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html)
- [axios](https://github.com/axios/axios)

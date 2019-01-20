import React, { Component } from 'react'
import {
  AppRegistry,
  Easing,
  Animated,
  I18nManager
} from 'react-native'
import LoginScene from './NavScene/Loginer'
import TestScene from './NavScene/tester'
import { name as appName } from './app.json'
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'

const LoginNav = createStackNavigator(
  {
    LoginScene,
    TestScene
  }, {
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    initialRouteName: 'LoginScene',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene;
        const inputRange = [index - 1, index, index + 1]

        const width = layout.initWidth
        const outputRange = !I18nManager.isRTL
          ? [width, 0, -width * 0.3]
          : [-width, 0, -width * 0.3]
        const opacity = position.interpolate({
          inputRange: [
            index - 1,
            index - 0.99,
            index,
            index + 0.99,
            index + 1,
          ],
          outputRange: [0, 1, 1, 0.85, 0]
        })
        const translateY = 0
        const translateX = position.interpolate({
          inputRange,
          outputRange,
        })

        return { opacity, transform: [{ translateX }, { translateY }] }
      },
    }),
  },

)
const App = createAppContainer(LoginNav)

AppRegistry.registerComponent(appName, () => App)

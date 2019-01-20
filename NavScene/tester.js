import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import NavBackHeader from '../Template/NavBackHeader'

let p = null

export default class Test extends Component {
  static navigationOptions = {
    header: (<NavBackHeader titleText='一个标题' leftOnPress={() => { p.props.navigation.navigate('LoginScene') }} />)
  }
  constructor(props) {
    super(props)
    p = this
  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='rgba(28,28,28,1)'
          barStyle='light-content'
          hidden={false}
          animated={false}
        />
        <Text>
          Hello test page
        </Text>
      </View>
    )
  }
}
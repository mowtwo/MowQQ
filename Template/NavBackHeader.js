import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class NavBackHeader extends Component {
  static defaultProps = {
    bgColor: '#1c1c1c',
    isLeft: true,
    size: 40,
    leftText: '返回',
    leftIcon: require('../image/backBlodGrayIco.png'),
    leftTxColor: '#939393',
    titleText: '',
    titleColor: '#fff',
    isRight: false,
    leftOnPress: () => { }
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{
        backgroundColor: this.props.bgColor,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 40,
        height: this.props.size,
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity style={{
          display: this.props.isLeft ? 'flex' : 'none',
          width: '33.3%',
        }}
          onPress={this.props.leftOnPress}
        >
          <View style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>

            <Image source={this.props.leftIcon} style={{
              width: 25,
              height: 25
            }} />
            <Text style={{
              color: this.props.leftTxColor,
              fontSize: 16
            }}>
              {this.props.leftText}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{
          width: '33.3%',
          color: this.props.titleColor,
          textAlign: 'center',
          fontSize: 18
        }}>
          {this.props.titleText}
        </Text>
        <View style={{
          width: '33.3%',
          opacity: this.props.isRight ? 1 : 0,
          backgroundColor: '#ccc'
        }}>

        </View>
      </View>
    )
  }
}
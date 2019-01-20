import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar, Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

export default class Loginer extends Component {
  static navigationOptions = {
    title: '登录',
    header: null
  }

  constructor(props) {
    super(props)
    // Navigation.events().bindComponent(this)
    this.state = {
      username: '',
      password: ''
    }
  }
  loginRun() {
    let loginCode = 0
    if (this.state.username == '')
      loginCode += 1
    if (this.state.password == '')
      loginCode += 2

    switch (loginCode) {
      case 0:
        alert('登录成功!')
        break
      case 1:
        alert('用户名不能为空!')
        break
      case 2:
      case 3:
        alert('账号或密码不能为空或者错误!')
        break
      default:
        alert('其他错误!')
    }
  }
  render() {
    return (
      <View style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        minHeight: 400,
        // backgroundColor:'#ccc'
      }}
      >
        <StatusBar
          backgroundColor='rgba(0,0,0,0)'
          barStyle='dark-content'
          hidden={true}
          animated={false}
        />
        <View style={{
          height: '92%',
          width: '86%',
          // backgroundColor: '#ccc'
        }}
        >
          <View style={LoginStyle.MainBody}>
            <View style={LoginStyle.LogoStyle}>
              <Image style={{ width: 30, height: 30 }} source={require('../image/logo.png')} />
              <Text style={{ fontSize: 25, color: '#000' }}>QQ</Text>
            </View>
            <View style={LoginStyle.FormsStyle}>
              <View style={LoginStyle.FormBlockStyle}>
                <Text style={LoginStyle.FormBlockLabel}>帐号</Text>
                <TextInput style={LoginStyle.FormBlockInput} placeholder={'QQ号/手机号/邮箱'} selectionColor={'#23a3d3'}
                  onChangeText={text => this.setState({ username: text })}
                />
              </View>
              <View style={LoginStyle.FormBlockStyle}>
                <Text style={LoginStyle.FormBlockLabel}>密码</Text>
                <TextInput secureTextEntry={true} style={LoginStyle.FormBlockInput} placeholder={'请填写密码'} selectionColor={'#23a3d3'}
                  onChangeText={text => this.setState({ password: text })}
                />
              </View>
              <TouchableHighlight style={{
                backgroundColor: '#6ed0f5',
                justifyContent: 'center',
                alignItems: 'center',
                height: 42,
                marginTop: 20,
                borderRadius: 3,
              }}
                activeOpacity={0.9}
                underlayColor={'#23a3d3'}
                onPress={this.loginRun.bind(this)}
              >
                <Text style={{ color: '#fff', fontSize: 18 }}>登录</Text>
              </TouchableHighlight>
              <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                  <Text style={{ color: '#23a3d3', fontSize: 12 }}>忘记密码?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ color: '#23a3d3', fontSize: 12 }}>新用户注册</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={LoginStyle.Footer}>
            <Text style={{ color: '#aaa', fontSize: 12 }}>登录即代表阅读并同意</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TestScene')}
            >
              <Text style={{ color: '#23a3d3', fontSize: 12 }}
              >服务条款</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const LoginStyle = StyleSheet.create({
  MainBody: {
    marginTop: 30,
    // backgroundColor: '#ccc'
  },
  LogoStyle: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#ccc'
  },
  FormsStyle: {
    // justifyContent: 'center',
    marginTop: 30,
    // backgroundColor: '#ccc'
  },
  FormBlockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    overflow: 'hidden',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  FormBlockLabel: {
    color: '#000',
    fontSize: 22
  },
  FormBlockInput: {
    height: '100%',
    alignItems: 'center',
    fontSize: 22,
    // backgroundColor:'#ccc',
    padding: 2,
    paddingLeft: 10,
  },
  Footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor:'#ccc',
    width: '100%'
  }
})
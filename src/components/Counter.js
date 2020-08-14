import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
class Counter extends Component {
  render() {
    return (
      <View>
        <Text style={{color: '#6E7AF0', fontSize: 55}}>
          {this.props.counter}
        </Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {counter: state.counterReducer};
}

export default connect(mapStateToProps)(Counter);

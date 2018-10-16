import React, { Component } from "react";
import { StyleSheet, View, PanResponder, Animated, SafeAreaView } from "react-native";

let CIRCLE_RADIUS = 30;

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      // pan: new Animated.ValueXY(),
      // opacity: new Animated.Value(1)
    };

  }

  isDropArea(gesture) {
    return gesture.moveY < 244;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {

    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            style={[styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
});

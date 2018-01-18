import React from "react";
import { Text } from "react-native";

export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "space-mono" }]} //eslint-disable-line react-native/no-inline-styles
      />
    );
  }
}

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class Typography extends Component {
  render() {
    const {regular,semibold,medium, primary,secondary,white,black,h1,h2,body,caption,style,children, ...props} = this.props;

    const textStyles =[
      styles.text,
      regular &&  styles.regular,
      semibold && styles.semibold,
      medium && styles.medium,
      primary && styles.primary,
      secondary && styles.secondary,
      white && styles.white,
      balck && styles.black,
      h1 && styles.h1,
      h2 && styles.h2,
      body && styles.body,
      caption && styles.caption,
      style //para redefinir algum estilo      
    ]

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize=theme.sizes.font,
    color:theme.colors.black
  },
  regular:{
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  medium: {
    fontWeight: "500"
  },
  // colors
  primary:{color:theme.colors.primary},
  secondary:{color:theme.colors.secondary},
  white:{color:theme.colors.white},
  black:{color:theme.colors.balck},
  // fonts
  h1: theme.fonts.h1,
  h2:theme.fonts.h2,
  body:theme.fonts.body,
  caption:theme.fonts.caption
})

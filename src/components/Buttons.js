import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../utils";
import { widthToDp } from "rn-responsive-screen";

const Buttons = ({ title, onPress, style, textSize }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text
        style={[
          styles.text,
          { fontSize: textSize ? textSize : widthToDp(3.5) },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text1}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    padding: 5,
    width: widthToDp(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 59,
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#171516",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  text1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Buttons;

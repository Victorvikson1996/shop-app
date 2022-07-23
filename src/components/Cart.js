import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS } from "../utils";
import { AntDesign } from "@expo/vector-icons";

export const Cart = ({ onPress }) => {
  return (
    <TouchableOpacity>
      <AntDesign
        style={{ marginLeft: 40 }}
        name="shoppingcart"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

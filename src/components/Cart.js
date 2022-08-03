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
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const Cart = () => {
  const items = useSelector((state) => state.cart);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <AntDesign
        style={{ marginLeft: 80 }}
        name="shoppingcart"
        size={24}
        color="black"
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 16,
          height: 16,
          borderRadius: 15 / 2,
          right: 10,
          top: +10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          {items.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

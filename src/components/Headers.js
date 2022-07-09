import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../utils";

const Headers = ({ title }) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }}
        style={styles.logo}
      /> */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Headers;

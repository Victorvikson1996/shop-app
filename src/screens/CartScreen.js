import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { Products } from "../utils";
import { COLORS } from "../utils";
import { Headers } from "../components";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBack = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <GoBack />
      </View>
      <View style={{ marginRight: 40 }}>
        <Headers />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default CartScreen;

export const goBack = ({ components }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View>{components}</View>
    </TouchableOpacity>
  );
};

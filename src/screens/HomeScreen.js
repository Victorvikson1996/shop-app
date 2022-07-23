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
import { Headers, ItemCards } from "../components";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Headers title="Shop Store" />

      <ScrollView>
        <View style={styles.products}>
          <FlatList
            data={Products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemCards item={item} />}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  products: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: widthToDp(100),
    paddingHorizontal: widthToDp(4),
    justifyContent: "space-between",
  },
});

export default HomeScreen;

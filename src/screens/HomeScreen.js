import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { Products } from "../utils";
import { COLORS } from "../utils";
import { Headers, ItemCards } from "../components";
import { useGetAllProductsQuery } from "../utils/api/ProductsApi";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";

const HomeScreen = () => {
  // const { data, error, isLoading } = useGetAllProductsQuery();
  const { items, status } = useSelector((state) => state.product);

  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    setisLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" loading={isLoading} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Headers title="Shop Store" />
      <ScrollView>
        <View style={styles.products}>
          {/* <FlatList
            data={items}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <ItemCards item={item} />}
            numColumns={2}
          /> */}
          {items.map((item) => (
            <ItemCards item={item} />
          ))}
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
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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

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
  const { items, status, loading } = useSelector((state) => state.product);
  console.log("ADADA:", items);

  // const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // setisLoading(true);
  }, []);

  if (status === "success") {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" loading={status} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Headers title="Shop Store" />
      <ScrollView>
        <View style={styles.products}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemCards items={item} />}
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

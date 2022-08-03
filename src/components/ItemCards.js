import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { COLORS } from "../utils";
import Buttons from "./Buttons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../Redux/CartSlice";

const ItemCards = ({ products, item, key }) => {
  const navigation = useNavigation();
  // const { items, status } = useSelector((state) => state.products);
  // const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(add(item));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          uri: item.image,
          des: item.description,
          price: item.price,
        })
      }
      style={styles.container}
      key={item.id}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <View style={styles.priceContainer}>
        <Text>${item.price}</Text>
        <Buttons onPress={() => addItem(item)} title="Add" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom: heightToDp(4),
    marginRight: widthToDp(4),
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    width: widthToDp(42),
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  image: {
    height: heightToDp(40),
    borderRadius: 7,
    marginBottom: heightToDp(2),
  },
  title: {
    fontSize: widthToDp(3.7),
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightToDp(3),
  },
  category: {
    fontSize: widthToDp(3.4),
    color: "#828282",
    marginTop: 3,
  },
  price: {
    fontSize: widthToDp(4),
    fontWeight: "bold",
  },
});

export default ItemCards;

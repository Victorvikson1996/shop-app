import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { COLORS } from "../utils";
import ProductsInfo from "../components/ProductInfo";
import { Buttons } from "../components";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/CartSlice";

export const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ padding: 10 }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const DetailScreen = ({ route, navigation, item }) => {
  const [activeImage, setActiveImage] = useState(null);
  const { items, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(add({ cart }));
    navigation.navigate("Cart");
  };

  const { des, uri, price } = route.params;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <GoBackButton />
          <Image source={{ uri }} style={styles.image} />
        </View>
        <View style={{ marginRight: 10, margin: 10 }}>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>{des}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View style={{ marginRight: 10, margin: 10 }}>
          <Buttons title="Add" onPress={() => addItem(items)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: widthToDp(100),
    height: widthToDp(100),
  },
  previewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: widthToDp(-10),
  },
  imageContainer: {
    paddingBottom: widthToDp(10),
  },

  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  description: {
    fontSize: heightToDp(4),
    color: "#aaa",
    marginTop: heightToDp(2),
  },
  heading: {
    fontSize: heightToDp(5),
    marginTop: heightToDp(3),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 30,
    marginTop: heightToDp(2),
  },
});

export default DetailScreen;

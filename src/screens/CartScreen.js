import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { Products } from "../utils";
import { COLORS } from "../utils";
import { Buttons, Headers } from "../components";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";
import { clearCart } from "../Redux/CartSlice";

const GoBack = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const CartItem = ({ item, key }) => {
  return (
    <View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }) => {
  const { items, total, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  console.log(items);

  if (amount < 1) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Cart is Empty
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingTop: 20 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                color: COLORS.violet,
              }}
            >
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Headers style={styles.header} title="Cart" />
      <View style={styles.goBack}>
        <GoBack />
      </View>
      {/* <ScrollView>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </ScrollView> */}
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => <CartItem item={item} />}
          ListFooterComponent={() => (
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Total: ${total}</Text>
            </View>
          )}
        />
        <View>
          <Buttons
            title="Clear Cart"
            onPress={() => {
              dispatch(clearCart());
            }}
          />
        </View>
      </View>

      <View style={{ marginRight: 40 }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  goBack: {
    marginRight: 300,
    top: -30,
  },
  price: {
    fontSize: 30,
    marginTop: heightToDp(2),
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.white,
  },
  title: {},
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightToDp(3),
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

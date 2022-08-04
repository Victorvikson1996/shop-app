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
import {
  clearCart,
  remove,
  incrementQuantity,
  decrementQuantity,
  calculateTotals,
} from "../Redux/CartSlice";
import { Button } from "../components/Buttons";

const GoBack = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const CartItem = ({ item, key }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const increment = () => {
    dispatch(incrementQuantity(items));
  };

  const decrease = () => {
    dispatch(decrementQuantity(items));
  };
  return (
    <View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity>
          <Buttons title="+" onPress={() => increment(items)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Buttons title="-" onPress={() => decrease(items)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation, route }) => {
  const { items, cart } = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const amount = useSelector((state) => state.cart.amount);

  const dispatch = useDispatch();

  if (quantity < 1) {
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
      <ScrollView>
        <FlatList
          data={items}
          renderItem={({ item }) => <CartItem item={item} />}
          ListFooterComponent={() => (
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                Total: ${quantity * amount.toFixed(2)}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(clearCart());
                }}
                style={{ paddingLeft: 50 }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    color: COLORS.violet,
                  }}
                >
                  Clear Cart
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
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

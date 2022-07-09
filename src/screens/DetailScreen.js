import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";

const DetailScreen = ({ route }) => {
  const [activeImage, setActiveImage] = useState(null);

  const { des, uri } = route.params;
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.previewContainer}>
        <TouchableOpacity
          onPress={() => {
            setActiveImage(data.image);
          }}
        ></TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: "#F7F6FB",
    paddingBottom: widthToDp(10),
  },
  imagePreview: {
    width: widthToDp(15),
    marginRight: widthToDp(5),
    borderColor: "#C37AFF",
    borderRadius: 10,
    height: widthToDp(15),
  },
});

export default DetailScreen;

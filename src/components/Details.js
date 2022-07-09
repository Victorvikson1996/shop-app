import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils";

const Details = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: activeImage }} style={styles.image} />
      <View style={styles.previewContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setActiveImage(image.url);
            }}
          >
            <Image
              source={{ uri: image.url }}
              style={[
                styles.imagePreview,
                {
                  borderWidth: activeImage === image.url ? 3 : 0,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
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

export default Details;

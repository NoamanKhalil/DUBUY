import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Noaman.jpg")}
            title="Me name is Noaman"
            subTitle="Listings 10"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 5,
  },
});

export default ListingDetailsScreen;

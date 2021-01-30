import React from "react";
import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image styles={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText styles={styles.title}>{listing.title}</AppText>
        <AppText styles={styles.subtitle}>${listing.price}</AppText>
        <View styles={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Me name is mosh"
            subTitle="Listings 10"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "50%",
    height: 50,
    resizeMode: "contain",
  },
  setColorPink: {
    color: "#e91e63",
  },
  subtitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    padding: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 500,
  },
});

export default ListingDetailsScreen;

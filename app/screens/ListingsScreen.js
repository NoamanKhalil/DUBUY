import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Dimensions, View } from "react-native";

import Button from "../components/AppButton";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import { set } from "react-native-reanimated";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useAPI from "../hooks/useAPI";
import ListItemSeperator from "../components/ListItemSeperator";

function ListingsScreen({ navigation }) {
  const getListingsApi = useAPI(listingsApi.getListings);

  const numColumns = 2;

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  };

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't get the listings</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        numColumns={numColumns}
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"AED" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
    marginTop: 10,
  },
});

export default ListingsScreen;

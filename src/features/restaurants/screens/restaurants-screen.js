import React from "react";
import { SafeAreaView, Platform, StyleSheet, View } from "react-native";
import { Search } from "../../../components/Search";
import { RestaurantInfoCard } from "../components/restaurants-info-card";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
const SafeArea = styled(SafeAreaView)`
   {
    flex: 1;
    ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px `}
  }
`;
export default RestaurantScreen = () => {
  return (
    <SafeArea>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.content}>
        <RestaurantInfoCard />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 16,
  },
});

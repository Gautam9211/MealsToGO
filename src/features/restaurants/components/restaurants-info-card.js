import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Kathi Rolls",
    icon,
    photos = [
      "https://imgs.search.brave.com/smo1p4iinDrCwEHD8KejNjjT9Mur_ajgHnRh1f4iHcw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/X0F4YnZZUWdUdTE4/bFVtb2hXeXd3SGFI/YSZwaWQ9QXBp",
    ],
    address = "NSP,Pitampura",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Text>{name}</Text>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

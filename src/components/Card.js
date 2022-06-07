import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Cards = () => (
  <Card elevation={5}>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default Cards;

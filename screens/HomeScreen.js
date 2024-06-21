import React from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useAuth } from "../AuthProvider";

const HomeScreen = ({ navigation }) => {

  const { logout } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome!</Title>
          <Paragraph>This is your Home Screen.</Paragraph>
        </Card.Content>
      </Card>
      <Button title="Logout" onPress={() => {
        logout();
        navigation.navigate("Login");
      }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 10,
    elevation: 4, // Adds shadow for Android (use shadow props for iOS)
  },
});

export default HomeScreen;

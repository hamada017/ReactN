import {View, StyleSheet, Text, Image, ImageBackground, ScrollView, Button, StatusBar, ActivityIndicator, SafeAreaView} from "react-native";
import Card from "./components/card";

export default function App(){
  return <SafeAreaView style={styles.Card}>
        <Card />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f5f5f5 "
  },
})
import React from "react";
//import logo from "./logo.svg";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Calendar from "react-calendar";

import "./App.css";

const Header = () => (
  <View
    style={{
      backgroundColor: "#006ead",
      height: 100,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <View
      style={{
        alignItems: "center",
        flexDirection: "row"
        // backgroundColor: "blue"
      }}
    >
      <Text>SastaTicket.pk</Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 10
        }}
      >
        Flights
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 10
        }}
      >
        Hotels
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 10
        }}
      >
        Deals
      </Text>
    </View>

    <View
      style={{
        //backgroundColor: "orange",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Text style={{ marginHorizontal: 5 }}>Login</Text>

      <Text style={{ marginHorizontal: 5 }}>Contact us</Text>
    </View>
  </View>
);

const Body = props => (
  <View
    style={{
      backgroundColor: "green",
      height: 500,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    }}
  >
    {props.children}
  </View>
);

const Footer = () => (
  <View
    style={{
      backgroundColor: "green",
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    }}
  >
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 20
      }}
    >
      This Footer
    </Text>
  </View>
);

function App() {
  return (
    <View style={styles.box}>
      {/* <View style={{ flex: 1, backgroundColor: "green" }} /> */}
      <Header />
      <Body>
        <Text>This is calender</Text>
        <Calendar />
      </Body>
      <Footer />

      {/* <FlatList
        data={[{ key: "a" }, { key: "b" }]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.key}</Text>
          </View>
        )}
      />
      <Calendar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 10,
    //backgroundColor: "red",
    flexDirection: "column"
    //height: "100%"
  },

  text: { fontWeight: "bold" }
});

export default App;

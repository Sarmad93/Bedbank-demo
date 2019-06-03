import React, { useState, user } from "react";
import { Formik } from "formik";

//import logo from "./logo.svg";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Keyboard,
  TextInput
} from "react-native";
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
      backgroundColor: "#006ead",
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
      backgroundColor: "#006ead",
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

function fireTestEvent() {
  window.dataLayer &&
    window.dataLayer.push({
      event: "pagerefresh"
    });
}
function App() {
  const [count, setCount] = useState(0);
  fireTestEvent();
  return (
    <View style={styles.box}>
      {/* <View style={{ flex: 1, backgroundColor: "green" }} /> */}

      <Header />
      <Body>
        <Text>This is calender</Text>
        <Text>Some change to invalidate snapshot</Text>
        <View>
          <Text>Counter {count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
        <Calendar />
        <div className="App-link">
          <Text>Hello textasfdsa</Text>
        </div>
        <Formik
          initialValues={{ firstName: "" }}
          onSubmit={values => {
            Alert.alert(JSON.stringify(values, null, 2));
            Keyboard.dismiss();
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={{ backgroundColor: "white", marginTop: 5 }}>
              <TextInput
                onChangeText={handleChange("firstName")}
                value={values.firstName}
                label="First name"
                placeholder="I am ready!"
              />

              <TouchableOpacity
                onPress={handleSubmit}
                style={{ backgroundColor: "red", marginTop: 5 }}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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

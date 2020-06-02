/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,

} from 'react-native';

const App = () => {
  return (
    <ImageBackground source={require("./assets/back1.jpg")} style={styles.image} >
      <View style={styles.container}>
        <SafeAreaView >
          <View style={styles.textInfo}>
            <View style={styles.titleCard}>
              <Text style={styles.title}>UYGULAMA İSMİ</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.textG}>Giriş Sayfası</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                keyboardType={"email-address"}
                placeholder="Mail Adresinizi Giriniz"
                placeholderTextColor="#818081">
              </TextInput>
              <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                secureTextEntry={true}
                placeholder="Şifrenizi Giriniz"
                placeholderTextColor="#818081">
              </TextInput>
              <View style={styles.buttonStyle}>
                <TouchableOpacity> 
                <Text style={styles.button}>Giriş Yap</Text>
                </TouchableOpacity>
                <Text style={styles.kaydol}>Hesabın Yok mu? Kaydol</Text>
              </View>

            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 70
  },
  title: {
    fontSize: 23,
    fontFamily: "italic",
    fontWeight: "700",
    color: "#B3B2B3",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textInfo: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    marginTop: 7,
    marginBottom: 7,
    height: 40,
    width: 210,
    borderColor: '#818081',
    borderBottomWidth: 1,
    color: "#818081"
  },
  buttonStyle: {
    flexDirection: "row",
    paddingTop: 7,
    justifyContent: "space-between",
    marginTop: 10
  },
  button:{
    borderColor:"white",
    borderWidth:1,
    borderRadius: 8,
    paddingHorizontal:15,
    paddingVertical:8,
    color:"#E5E4E5"
  },
  textG: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#E5E4E5",

    marginBottom: 10
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#DCDCDC",
    borderRadius: 6,
    padding: 15,
    backgroundColor: "transparent",
    width: 310,
  },
  kaydol: {
    color: "#E5E4E5",
    fontSize: 10,
    paddingTop: 17,
    paddingLeft: 80
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;

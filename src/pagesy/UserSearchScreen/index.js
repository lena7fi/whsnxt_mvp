import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView, SafeAreaView } from "react-native"


const { width, height } = Dimensions.get('screen');

export default function UserSearchScreen({ navigation }) {
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);

  onToggleFilterMenu = () => {
    setFilterMenuVisible(!filterMenuVisible);
  }
  return (
    <SafeAreaView style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Text style={styles.Txt432}>Search</Text>
      </View>
      <View style={{ width: '100%', paddingVertical: 20, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder="Search for products, brands" placeholderTextColor={'grey'} style={{ backgroundColor: 'white', width: '100%', borderRadius: 5, paddingLeft: 60, color: 'black' }} autoFocus={false}></TextInput>
        <Image source={require('./i_search.png')} style={{ position: 'absolute', left: 20 }} />
      </View>

      <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Emama Watson</Text>
          <Image source={require('./i_up.png')} style={{ alignSelf: 'center' }} />
        </View>
      </ScrollView>
      <View style={{ marginBottom: 250 }}><Text style={{ fontSize: 18, color: 'white' }}>Trending</Text>
        <View style={{ flexDirection: 'row', color: 'blue', justifyContent: 'space-around', marginTop: 30 }}>
          <Text style={{ color: '#1455F5' }}>mac miller</Text>
          <Text style={{ color: '#1455F5' }}>dolly</Text>
          <Text style={{ color: '#1455F5' }}>Ariana Grande</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  PrivacyPolicy: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "rgba(0,0,0,1)",
    width: width,
    height: height,
  },
  Group642: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
  },
  Group379: {
    position: 'absolute',
    left: 0,
    width: 33.57,
    height: 33.57,
    zIndex: 1,
  },
  Group380: {
    position: 'absolute',
    right: 0,
    width: 33.57,
    height: 33.57,
    zIndex: 1,
  },
  Txt432: {
    fontSize: 16,
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
  iconNumber: {
    backgroundColor: 'red',
    width: 16, height: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -5,
    right: 0,
    textAlign: 'center',
    paddingLeft: 3,
    paddingTop: 1
  },
})

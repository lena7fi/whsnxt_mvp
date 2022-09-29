import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView, SafeAreaView, Platform } from "react-native"

const { width, height } = Dimensions.get('screen');

let deviceHeight = Dimensions.get('screen').height;
let windowHeight = Dimensions.get('window').height;
let bottomNavBarHeight = deviceHeight - windowHeight;

if (bottomNavBarHeight < 0 && Platform.OS === 'ios') bottomNavBarHeight = 0;

export default function ChatList({ navigation }) {
  onClickChat = () => {
    navigation.navigate('Chat');
  }

  return (
    <SafeAreaView style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('./Group.png')}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Text style={styles.Txt432}>Chat</Text>
      </View>
      <View style={{ width: '100%', paddingVertical: 20, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput placeholder="Search..." placeholderTextColor={'grey'} style={{ backgroundColor: 'white', width: '100%', borderRadius: 20, marginRight: 10, paddingLeft: 40, color: 'black', height: 40 }} autoFocus={true}></TextInput>
        <Image source={require('./i_search.png')} style={{ position: 'absolute', right: 5, height: 40, width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column' }} >
        <View style={{ width: '100%', height: 75, marginTop: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user1.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user2.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user3.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user4.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user5.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user6.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: 75, marginTop: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} onTouchEnd={() => onClickChat()}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./user7.png')} />
              <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ fontSize: 14, color: 'white' }}>Jenny Morison</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>How was your day?</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 30 }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>9:30 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: bottomNavBarHeight, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
        <Image source={require('../HomeScreen/i_navbar1.png')} onTouchEnd={() => navigation.navigate('Home')} />
        <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('../HomeScreen/i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <View onTouchEnd={() => navigation.navigate('Notification')}><Image source={require('../HomeScreen/i_navbar3.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <Image source={require('../HomeScreen/i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
      </View>
    </SafeAreaView>
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

import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, ScrollView, TextInput, SafeAreaView } from "react-native"
import { auth, db } from '../../../firebase';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { token, createMeeting } from "../../api";
import { notifyMessage } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get('screen');

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('yuvan');
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);
  const [token, setToken] = useState(token);
  const [meetingId, setMeetingId] = useState("");

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          first_name: 'Vadim',
          last_name: 'Virvik',
          // avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]) 
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
      snapshot.docs.map(doc => {
        console.log('unscri', doc.data());
        return {
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }})
    ));

    return () => {
      unsubscribe();
    };
  },[]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    console.log(messages[0]);
    const { _id, createdAt, text, user, } = messages[0]

    addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
  }, []);

  const videoCall = async () =>{
    const meetingId = await createMeeting();
    setMeetingId(meetingId);
    if (!token && !meetingId) {
      notifyMessage("Token or Meeting Id is not generated");
    }else{
      navigation.navigate('VideoCall', {token, meetingId});
    }
  }

  return (
    <SafeAreaView style={{
      display: "flex",
      flexDirection: "column",
      padding: 20,
      paddingBottom: 80,
      backgroundColor: "rgba(0,0,0,1)",
      width: width,
      height: height
    }} >
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('./Group.png')}
          onTouchEnd={(e) => { { navigation.navigate("Home"); } }}
        />
        <Image source={require('./user1.png')} />
      </View>
      <Text style={{ color: 'white', alignSelf: 'center', marginTop: 10, fontSize: 14 }}>Jenny Morison</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
        <TouchableOpacity activeOpacity={0.2} onTouchEnd={()=>videoCall()}>
          <Image source={require('./i_voice_call.png')} style={{ marginHorizontal: 15 }} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.2} onTouchEnd={()=>videoCall()}>
          <Image source={require('./i_video_call.png')} style={{ marginHorizontal: 15 }} onTouchEnd={() => videoCall()} />
        </TouchableOpacity>
      </View>
      {/* <ScrollView style={{ width: width, borderRadius: 20, backgroundColor: '#0f0f0f', height: 400, marginLeft: -20, marginTop: 50, paddingHorizontal: 20, paddingVertical: 40 }}> */}
      {/* <View style={{ flexDirection: 'row' }}>
          <Image source={require('./user_me.png')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'column', marginRight: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: '#1455F5', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>Better than yesterday</Text><Text style={{ color: 'white', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
          <Image source={require('./user_you.png')} style={{ marginTop: 20 }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./user_me.png')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'column', marginRight: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: '#1455F5', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>Better than yesterday</Text><Text style={{ color: 'white', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
          <Image source={require('./user_you.png')} style={{ marginTop: 20 }} />
        </View> */}
        {/* <ScrollView style={{height: height, width: width}}> */}
        <GiftedChat
              messages={messages}
              showAvatarForEveryMessage={true}
              onSend={messages => onSend(messages)}
              user={{
                  _id: 'fi',
                  name: 'Fi',
                  avatar: ''
              }}
          />
        {/* </ScrollView> */}
      
      {/* </ScrollView> */}
      {/* <View style={{ flexDirection: 'row', zIndex: 1, position: 'absolute', bottom: 60, width: width, height: 40, paddingHorizontal: 20 }}>
        <Image source={require('./i_bookmark.png')} style={{ alignSelf: 'center' }} />
        <TextInput
          style={{ marginLeft: 10, backgroundColor: 'white', borderRadius: 5, flexGrow: 1, paddingLeft: 10 }}
          placeholder={"Send a message."}
          placeholderTextColor="grey"
        />
        <Image source={require('./i_record.png')} style={{ position: 'absolute', right: 90, alignSelf: 'center' }} />
        <Image source={require('./i_face.png')} style={{ position: 'absolute', right: 70, alignSelf: 'center' }} />
        <Image source={require('./i_send.png')} style={{ position: 'absolute', right: 10, alignSelf: 'center' }} />
      </View> */}
      <KeyboardSpacer/>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  PrivacyPolicy: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    paddingBottom: 80,
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
})

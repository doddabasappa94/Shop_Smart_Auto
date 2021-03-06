import React, {useState, useEffect} from 'react';
import { ScrollView, TextInput,ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar, View,Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function MakeAnOffer() {

  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [phone, changePhone] = useState('');
  const [offer, changeOffer] = useState('');
  const [message, changeMessage] = useState('');

  return (
    <>
      <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        {/* <ExpoLinksView /> */}

        <View>
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changeName(text)}
            value={name}
            placeholder="Name"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changeEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changePhone(text)}
            value={phone}
            placeholder="Phone"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changeOffer(text)}
            value={offer}
            placeholder="Your Offer"
            placeholderTextColor="#9fa2a7"

          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center', }}
            onChangeText={text => changeMessage(text)}
            value={message}
            placeholder="Message"
            placeholderTextColor="#9fa2a7"
          />
        </View>
        <View>
          <TouchableOpacity >
            <LinearGradient
              colors={['#1e508d', '#3c7a6b', '#67b639']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.button}>

              <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
}

MakeAnOffer.navigationOptions = ({navigation}) => ( {
  headerTitle: (
   'Make An Offer'
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    fontSize:'18',
   fontWeight: 'bold',
    // marginTop: -10,
    // height:50
    height: Platform.OS === 'android' ? 30 : 55,
    marginTop: Platform.OS === 'ios' ? -10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 0: 25,
    ...Platform.select({
      ios: { backgroundColor: '#0e3ba0'},
      android: { backgroundColor: '#0e3ba0'}
    }),
  },
  headerLeft: (
    <TouchableOpacity onPress={ () => navigation.goBack(null)}>
     <ImageBackground
          style={{ width: 20, height: 20,marginTop:3,position:'relative',marginLeft:20,color: '#fff' }}
          source={require('../assets/images/back_icon.png')}>
        </ImageBackground>
      {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>
     
     <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20,marginTop:3,position:'relative',marginRight:20, color: '#fff' }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('HeaderSearch')}>
        <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
      </TouchableOpacity>
    
    </View>
  ),

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#3a786e",
    width: 170,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,


  },
});

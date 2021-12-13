import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Alert } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const GOOGLE_PLACES_API_KEY = 'AIzaSyCGr2f24vkDuNYiDEnu170trNN7WaMFvLg' // never save your real api key in a snack!

const MyApp = () => {
  const [search, setSearch] = useState('')

  // const handleTextChange = placeName => {
  //   const findPlace = name.filter(item => {
  //     return placeName === name
  //   })
  //   if (findPlace.length === 2) {
  //     Alert.alert('No data found')
  //   }
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainfeild}>
        <View style={styles.iconfield}>
          <AntDesign name="search1" size={18} style={styles.icon} />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          // onChangeText={handleTextChange}
          minLength={3}
          fetchDetails={true}
          // nearbyPlacesAPI=“GooglePlacesSearch”
          query={{
            key: GOOGLE_PLACES_API_KEY,
            // language: en,
          }}
          styles={googlePlacesStyle}
          onPress={(data, details = null) => {
            console.log({ details }, 'data')
          }}
          enablePoweredByContainer={false}
        />
      </View>
    </SafeAreaView>
  )
}
export default MyApp

const googlePlacesStyle = {
  predefinedPlacesDescription: {
    color: 'red',
  },
  listView: {
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: 'black',
    height: '100%',
    width: '100%',
  },
  // textInputContainer: {
  //   backgroundColor: 'green',
  //   flexDirection: 'row',
  //   borderBottomWidth: 0,
  //   width: '100%',
  //   // borderRadius: 5,
  // },
  textInput: {
    color: 'black',
    fontSize: 24,
    backgroundColor: 'white',
    paddingLeft: 1,
    // borderTopLeftRadius:5
  },
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CBCED4',
    // padding: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  icon: {
    // marginTop: 13,
    paddingHorizontal: 5,
  },
  mainfeild: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#CBCED4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 3,
  },
  iconfield: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 4.5,
  },
})

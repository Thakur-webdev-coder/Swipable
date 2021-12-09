import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomHeader from './CustomHeader'
import Details from './Details'
const Hotel = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.main}>
        <View style={styles.area}>
          <View style={styles.mainarea}>
            <AntDesign name="search1" size={18} style={styles.icon} />
            <TextInput style={styles.txtinput} placeholder="Description" />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.area1}>
          <View style={styles.mainarea}>
            <AntDesign name="search1" size={18} style={styles.icon} />
            <TextInput style={styles.txtinput} placeholder="UK" />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.btn1}>Lookup</Text>
        </TouchableOpacity>
      </View>
      <Details />
    </View>
  )
}

export default Hotel

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF1F0',
    // paddingHorizontal: 10,
  },
  txtinput: {
    backgroundColor: '#CBCED4',
    paddingVertical: 5,
    width: '90%',
    fontSize: 27,
    paddingLeft: 1,
  },
  mainarea: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 13,
    paddingHorizontal: 9,
  },
  area: {
    backgroundColor: '#CBCED4',
    marginTop: 16,
    borderRadius: 5,
  },
  main: {
    paddingHorizontal: 10,
  },
  area1: {
    backgroundColor: '#CBCED4',
    marginTop: 22,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#09C0EC',
    marginTop: 11,
    paddingVertical: 13,
    marginLeft: 20,
    marginRight: 20,
  },

  btn1: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
})

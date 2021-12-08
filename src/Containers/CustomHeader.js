import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomHeader = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.main1}>
        <Text style={styles.txt1}>Close</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.txt2}>Hotels</Text>
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  conatiner: {
    height: '18%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  txt1: {
    color: '#4A80FC',
    fontSize: 23,
  },
  main1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  txt2: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '22%',
    paddingTop: 25,
  },
})

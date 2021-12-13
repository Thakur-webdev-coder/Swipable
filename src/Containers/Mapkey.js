import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Mapkey = () => {
  return (
    <View>
      <Text>hi</Text>
      <Picker style={styles.picker} />
    </View>
  )
}

export default Mapkey

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  picker: {
    width: 300,
    height: 45,
    border: 'blue',
    borderWidth:
  },
})

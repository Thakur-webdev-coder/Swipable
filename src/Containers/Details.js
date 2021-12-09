import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Data } from './Data'
// import { SwipeListView } from 'react-native-swipe-list-view'
import { FlatList } from 'react-native-gesture-handler'
import { Swipeable } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native'

const Details = () => {
  const [showicon, setshowicon] = useState('')
  const RenderRight = (progress, dragX) => {
    return (
      <View style={styles.bookarea}>
        <Text style={styles.book} onPress={() => setshowicon(!showicon)}>
          Bookmark
        </Text>
      </View>
    )
  }
  const RenderItem = ({ item, index }) => {
    const BookmarkItem = () => {
      // alert('Item will be Bookmarked')
    }
    return (
      <Swipeable
        overshootRight={false}
        onSwipeableRightOpen={BookmarkItem}
        renderRightActions={RenderRight}
      >
        <View style={styles.field}>
          <Text style={styles.txt}>{item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txt1}>{item.detail}</Text>
            <View>
              {showicon ? (
                <Ionicons name="bookmark" size={33} style={styles.icon} />
              ) : null}
            </View>
          </View>
          <Text style={styles.txt2}>{item.mob}</Text>
        </View>
      </Swipeable>
    )
  }
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={Data}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  field: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  txt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '500',
  },
  txt1: {
    fontSize: 20,
    color: 'gray',
  },
  txt2: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  bookarea: {
    width: '25%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 1,
  },
  book: {
    color: '#fff',
    fontSize: 20,
  },
  icon: {
    color: '#8b1001',
    paddingLeft: 12,
  },
})

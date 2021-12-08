import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { ExampleContainer } from '@/Containers'
import Hotel from '@/Containers/Hotel'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Hotel} />
    </Tab.Navigator>
  )
}

export default MainNavigator

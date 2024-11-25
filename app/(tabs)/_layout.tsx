import { Stack, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false}}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={18} color={color}/>
        )
      }}/>
      <Tabs.Screen name="users" options={{
        title: 'Users',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="users" size={18} color={color}/>
        )
      }}/>
      <Tabs.Screen name="about" options={{
        title: 'About',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="info-circle" size={18} color={color}/>
        )
      }}/>
    </Tabs>
  )
}

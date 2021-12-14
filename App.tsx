import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TravelService from './services/Travel'

const Application = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const dataFetch = await TravelService.list()
    const rawData = dataFetch.data.data.launchesPast

    setData(rawData)

    console.log('rawData', rawData)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text>teste live reload</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

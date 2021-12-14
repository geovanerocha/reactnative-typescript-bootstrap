
import RocketItem from './components/RocketItem'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import TravelService from './services/Travel'

const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const dataFetch = await TravelService.list()
    const rawData = dataFetch.data.data.launchesPast

    setData(rawData)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <StatusBar barStyle={'default'}/>
      {
            data.map((item, index) => {
              return (
                <RocketItem
                  key={index}
                  title={item.mission_name}
                  image={item.links.flickr_images[0]}
                  link={item.links.article_link}
                  date={item.launch_date_local}
                />
              )
            })
          }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
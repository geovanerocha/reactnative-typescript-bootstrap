import React from 'react'
import {View, Image, Text, StyleSheet, Button, Linking} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  auxiliarText: {
    fontWeight: '700'
  },
  buttonStyle: {
    fontSize: 18
  }
});

const RocketItem = ({title, image, link, date}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{uri: image}}
      />
      <Text>{title}</Text>
      <Text style={styles.auxiliarText}>Date: {new Date(date).toLocaleString()}</Text>
      <Button title={`See the article about ${title}`} onPress={ ()=>{ Linking.openURL(link)}} />
    </View>
  )
}

export default RocketItem
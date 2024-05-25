import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/logo1.png')}
          style={styles.logo}
        />
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.linkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.linkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Scan Me')}>
            <Text style={styles.linkText}>Scan Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Trivia Quiz')}>
            <Text style={styles.linkText}>Trivia Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Fun Fact')}>
            <Text style={styles.linkText}>Fun Fact</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
      <View style={styles.bodyContainer}>
        <ThemedText type="title" style={styles.titleText}>Welcome To TrashTrek!</ThemedText>
        <HelloWave />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f', // Dark slate gray color for the main body
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ADD8E6', // Light blue background for the header
  },
  logo: {
    height: 40,
    width: 40,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#0000FF', // Blue color for the links
    marginHorizontal: 8,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleText: {
    fontSize: 24,
    color: '#ffffff', 
    marginBottom: 16, 
  },
});

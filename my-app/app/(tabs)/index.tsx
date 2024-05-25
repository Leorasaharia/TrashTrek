import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function HomeScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - 10) / 8; // Making the images very small

  const images = [
    { id: '1', src: require('@/assets/images/Designer.png') },
    { id: '2', src: require('@/assets/images/Designer (1).png') },
    { id: '3', src: require('@/assets/images/Designer (2).png') },
    { id: '4', src: require('@/assets/images/Designer (3).png') },
  ];

  return (
    <View style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <Image source={require('@/assets/images/logo1.png')} style={styles.logo} />
        <View style={styles.linksContainer}>

          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.linkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Scan Me')}>
            <Text style={styles.linkText}>Scan Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TriviaQuiz')}> 
      </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Fun Fact')}>
            <Text style={styles.linkText}>Fun Fact</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>
      <View style={styles.bodyContainer}>
        <ThemedText type="title" style={styles.titleText}>Welcome To TrashTrek!</ThemedText>
        <HelloWave />
        <View style={styles.gridContainer}>
          {images.map(image => (
            <View key={image.id} style={[styles.imageWrapper, { width: imageSize, height: imageSize }]}>
              <Image source={image.src} style={[styles.gridImage, { width: imageSize, height: imageSize }]} />
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.trashpediaButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Trashpedia</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Trashpedia</Text>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Plastic</Text>
              <Text style={styles.sectionContent}>
                Plastic waste is a major environmental issue. It can take up to 1000 years to decompose in landfills.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Paper</Text>
              <Text style={styles.sectionContent}>
                Paper waste can be recycled and used to make new paper products, reducing the need for deforestation.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Glass</Text>
              <Text style={styles.sectionContent}>
                Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Metal</Text>
              <Text style={styles.sectionContent}>
                Recycling metal reduces the need for mining, conserving natural resources and saving energy.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>World Ecology</Text>
              <Text style={styles.sectionContent}>
                Protecting our ecology is vital for maintaining biodiversity and ensuring a healthy environment for future generations.
              </Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2e7d6', // Light grayish blue background for the main body
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#1a202c', // Dark gray background for the header
    borderBottomWidth: 5,
    borderBottomColor: '#e2e8f0', // Light border color for separation
  },
  logo: {
    height: 90,
    width: 90,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    color: '#a0aec0', // Light gray text color for the links
    marginHorizontal: 14,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 32,
    color: '#2d3748', // Darker gray text color for the title
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  imageWrapper: {
    margin: 6,
    alignItems: 'center',
  },
  gridImage: {
    borderRadius: 10,
  },
  trashpediaButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#2d3748',
  },
  closeButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
    alignSelf: 'center',
    marginTop: 20,
  },
});

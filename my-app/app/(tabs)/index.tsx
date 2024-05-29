import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Image, Linking, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import your images manually
import image1 from '@/assets/images/1.jpg';
import image10 from '@/assets/images/10.jpg';
import image11 from '@/assets/images/11.jpg';
import image12 from '@/assets/images/12.jpg';
import image13 from '@/assets/images/13.jpg';
import image14 from '@/assets/images/14.jpg';
import image15 from '@/assets/images/15.jpg';
import image16 from '@/assets/images/16.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';
import image6 from '@/assets/images/6.jpg';
import image7 from '@/assets/images/7.jpg';
import image8 from '@/assets/images/8.jpg';
import image9 from '@/assets/images/9.jpg';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - 10) / 10; // Making the images very small

  // Create an array of image objects
  const images = [
    { id: '1', src: image1 },
    { id: '2', src: image2 },
    { id: '3', src: image3 },
    { id: '4', src: image4 },
    { id: '5', src: image5 },
    { id: '6', src: image6 },
    { id: '7', src: image7 },
    { id: '8', src: image8 },
    { id: '9', src: image9 },
    { id: '10', src: image10 },
    { id: '11', src: image11 },
    { id: '12', src: image12 },
    { id: '13', src: image13 },
    { id: '14', src: image14 },
    { id: '15', src: image15 },
    { id: '16', src: image16 },
  ];

  console.log(images);

  const handleTrashpediaPress = () => {
    Linking.openURL('https://sites.google.com/view/trashtrek/home');
  };

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
            <Text style={styles.linkText}>Trivia Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FunFacts')}>
            <Text style={styles.linkText}>FunFacts</Text>
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
        <TouchableOpacity style={styles.trashpediaButton} onPress={handleTrashpediaPress}>
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
    backgroundColor: '#d2e7d6', 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#1a202c',
    borderBottomWidth: 5,
    borderBottomColor: '#e2e8f0',
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

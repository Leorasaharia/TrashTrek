import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const About: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.section}>
        <Image source={require('@/assets/images/img5.png')} style={styles.image} />
          <Text style={styles.title}>Krishang Saharia: Trash Trek Visionary</Text>
        </View>
        <View style={styles.section}>
          <Image source={require('@/assets/images/img1.png')} style={styles.image} />
          <Text style={styles.text}>
            Inspired by Change{'\n\n'}
            Krishang Saharia, a 9th grader, dreamt of gamifying trash collection with "TRASH TREK" to make cleaning the environment fun. Mentored by Sujoy Anand sir and Manish Phatak sir, his vision was to:
            {'\n'}• Promote environmental awareness through engaging gameplay.
            {'\n'}• Foster community engagement with leaderboards and real-world cleanups.
          </Text>
        </View>
        <View style={styles.section}>
          <Image source={require('@/assets/images/img2.png')} style={styles.image} />
          <Text style={styles.text}>
            Trash Trek Explained{'\n\n'}
            This mobile app uses your phone's camera to identify virtual trash. Players collect it, completing challenges based on real-world scenarios like "Park Cleanup." Eco-Points earned unlock virtual badges and real-world rewards.
          </Text>
        </View>
        <View style={styles.section}>
          <Image source={require('@/assets/images/img3.png')} style={styles.image} />
          <Text style={styles.text}>
            The Impact{'\n\n'}
            TRASH TREK goes beyond entertainment:
            {'\n'}• Educates players about trash and sustainability via a "Trashpedia" and quizzes.
            {'\n'}• Drives positive change with potential tree planting and NGO partnerships.
          </Text>
        </View>
        <View style={styles.section}>
          <Image source={require('@/assets/images/img4.png')} style={styles.image} />
          <Text style={styles.text}>
            Krishang's Passion{'\n\n'}
            This project highlights Krishang's passion for the environment and his innovative spirit. Recognition through the awards will help bring TRASH TREK to life.
          </Text>
          <Text style={styles.contact}>
            For more information{'\n'}
            Contact us at:{'\n'}
            📞 Phone: +91 6261 026 345{'\n'}
            ✉ Email: trashtrek@gmail.com{'\n'}
            📌 Talpuri A-Block, Bhilai, C.G., India 490006
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#C1E1C1', // Light green background for sections
    padding: 15,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark grey
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark grey
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark grey
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
});

export default About;

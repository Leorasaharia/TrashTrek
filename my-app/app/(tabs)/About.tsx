import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const About: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={[styles.gridItem, styles.shade]}>
          <Text style={[styles.gridText, styles.question]}>
            <h1>Krishang Saharia: Trash Trek Visionary</h1>
          </Text>
        </View>
        <View style={[styles.gridItem, styles.shade]}>
          <Text style={[styles.gridText, styles.question, styles.vanish]}>
            <h1>Inspired by Change</h1>
            Krishang Saharia, a 9th grader, dreamt of gamifying trash collection with "TRASH TREK" to make cleaning the environment fun. Mentored by Sujoy Anand sir and Manish Phatak sir, his vision was to:
            - Promote environmental awareness through engaging gameplay.
            - Foster community engagement with leaderboards and real-world cleanups.
          </Text>
        </View>
        <View style={[styles.gridItem, styles.shade]}>
          <Text style={[styles.gridText, styles.question, styles.vanish]}>
            <h1>Trash Trek Explained</h1>
            This mobile app uses your phone's camera to identify virtual trash. Players collect it, completing challenges based on real-world scenarios like "Park Cleanup." Eco-Points earned unlock virtual badges and real-world rewards.
          </Text>
        </View>
        <View style={[styles.gridItem, styles.shade]}>
          <Text style={[styles.gridText, styles.question, styles.vanish]}>
            <h1>The Impact</h1>
            <h2>TRASH TREK goes beyond entertainment</h2>
            - Educates players about trash and sustainability via a "Trashpedia" and quizzes.
            - Drives positive change with potential tree planting and NGO partnerships.
          </Text>
        </View>
        <View style={[styles.gridItem, styles.shade]}>
          <Text style={[styles.gridText, styles.question, styles.vanish]}>
            <h1>Krishang's Passion</h1>
            This project highlights Krishang's passion for the environment and his innovative spirit. Recognition through the awards will help bring TRASH TREK to life.
          </Text>
          <Text style={[styles.gridText, styles.contact]}>
            <h1>For more information</h1>
            <h2>Contact us at:</h2>
            📞 • Phone: +91 6261 026 345
            ✉ • Email: trashtrek@gmail.com
            📌 • Talpuri A-Block, Bhilai, C.G., India 490006
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
    flexDirection: 'column',
    padding: 20,
  },
  gridItem: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // White
  },
  gridText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dark grey
  },
  question: {
    fontWeight: 'bold',
  },
  vanish: {
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
    ':hover': {
      opacity: 0,
    },
  },
  contact: {
    fontStyle: 'italic',
    marginTop: 10,
  },
  shade: {
    backgroundColor: '#a7e8a7', // Light pastel green
  },
});

export default About;

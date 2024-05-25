import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: Question[] = [
  {
    question: "The largest rainforest in the world by area is:",
    options: ["Amazon Rainforest", "Congo Rainforest", "Southeast Asian Rainforest", "Temperate Rainforest"],
    correctAnswer: "Amazon Rainforest",
  },
  {
    question: "Which of the following is NOT a major greenhouse gas contributing to global warming?",
    options: ["Carbon dioxide (CO2)", "Methane (CH4)", "Oxygen (O2)", "Nitrous oxide (N2O)"],
    correctAnswer: "Oxygen (O2)",
  },
  {
    question: "The process by which plants convert sunlight, water, and carbon dioxide into energy is called:",
    options: ["Photosynthesis", "Cellular respiration", "Chemosynthesis", "Transpiration"],
    correctAnswer: "Photosynthesis",
  },
  {
    question: "The Great Barrier Reef is the world's largest:",
    options: ["Coral reef system", "Mangrove forest", "Ocean gyre", "Ocean trench"],
    correctAnswer: "Coral reef system",
  },
  {
    question: "Which of the following is NOT a renewable energy source?",
    options: ["Solar energy", "Wind energy", "Hydroelectric power", "Coal"],
    correctAnswer: "Coal",
  },
  {
    question: "What is the term for the gradual increase in the average temperature of the Earth's atmosphere and its oceans?",
    options: ["Global warming", "Ozone depletion", "Acid rain", "Deforestation"],
    correctAnswer: "Global warming",
  },
  {
    question: "What is the main cause of ocean acidification?",
    options: ["Oil spills", "Plastic pollution", "Increased absorption of carbon dioxide from the atmosphere", "Overfishing"],
    correctAnswer: "Increased absorption of carbon dioxide from the atmosphere",
  },
  {
    question: "Which of the following is NOT a consequence of deforestation?",
    options: ["Soil erosion", "Loss of biodiversity", "Increased flooding", "Improved air quality"],
    correctAnswer: "Improved air quality",
  },
  {
    question: "What is the term for the interconnected relationships between living organisms and their environment?",
    options: ["Ecosystem", "Biosphere", "Habitat", "Population"],
    correctAnswer: "Ecosystem",
  },
  {
    question: "The international day dedicated to raising awareness about the environment is:",
    options: ["Earth Day (April 22nd)", "World Wildlife Day (March 3rd)", "International Day for Biological Diversity (May 22nd)", "World Water Day (March 22nd)"],
    correctAnswer: "Earth Day (April 22nd)",
  },
  {
    question: "What is the name of the international agreement that aims to combat climate change and its impacts?",
    options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Ramsar Convention"],
    correctAnswer: "Paris Agreement",
  },
];

const TriviaQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        if (currentQuestion < quizData.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(10);
        } else {
          setQuizCompleted(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentQuestion, timeLeft]);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(10);
  };

  const displayAnswers = quizData.map((question, index) => (
    <View key={index}>
      <Text style={styles.question}>
        Question {index + 1}: {question.question}
      </Text>
      <Text style={styles.correctAnswer}>
        Correct Answer: {question.correctAnswer}
      </Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/trivia.png')} style={styles.logo} />
      {quizCompleted ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.score}>
            Your Score: {score}
          </Text>
          <Text style={styles.resultHeading}>
            Questions and Answers:
          </Text>
          {displayAnswers}
          <TouchableOpacity
            style={styles.retestButton}
            onPress={handleRetest}>
            <Text style={styles.buttonText}>
              Retest
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View>
          <Text style={styles.question}>
            {quizData[currentQuestion].question}
          </Text>
          <Text style={styles.timer}>
            Time Left: {timeLeft} sec
          </Text>
          {quizData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.buttonText}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3748',
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3748',
    textAlign: 'center',
  },
  resultHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3748',
    textAlign: 'center',
  },
  retestButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  timer: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  correctAnswer: {
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default TriviaQuiz;

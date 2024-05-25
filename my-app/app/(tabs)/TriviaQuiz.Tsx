import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Question {
	question: string;
	options: string[];
	correctAnswer: string;
}

const quizData: Question[] = [
	{
		question: "What is the capital of France?",
		options: ["London", "Berlin", "Paris", "Madrid"],
		correctAnswer: "Paris",
	},
	{
		question: "What is 2 + 2?",
		options: ["3", "4", "5", "6"],
		correctAnswer: "4",
	},
	{
		question: "What is the largest ocean on Earth?",
		options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
		correctAnswer: "Pacific Ocean",
	},
	{
		question: "What is the tallest mountain on Earth?",
		options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount Denali"],
		correctAnswer: "Mount Everest",
	},
	{
		question: "What is the chemical symbol for water?",
		options: ["H2O", "CO2", "O2", "N2"],
		correctAnswer: "H2O",
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
			{quizCompleted ? (
				<View>
					<Text style={styles.score}>
						Your Score: {score}
					</Text>
					<Text style={styles.question}>
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
				</View>
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
	},
	retestButton: {
		backgroundColor: 'blue',
		padding: 10,
		alignItems: 'center',
		borderRadius: 5,
	},
	timer: {
		fontSize: 16,
		fontWeight: 'bold',
		backgroundColor: 'yellow',
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 20,
	},
	correctAnswer: {
		color: 'green',
		marginBottom: 10,
	},
});

export default TriviaQuiz;

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { clearLocalNotification } from '../utils/helpers';
import { styles, quizStyles } from '../utils/styles';

export default class Quiz extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Quiz'
        }
    };

    state = {
        currentCardIndex: 0,
        correctAnswers: 0,
        currentView: 'question',
        isAnswerView: false,
    }

    goToNextCard = () => {
        const { deck } = this.props.navigation.state.params
        const totalQuestions = deck.questions.length;
        let { currentCardIndex } = this.state
        if (currentCardIndex < totalQuestions - 1) {
            this.setState({ currentCardIndex: ++currentCardIndex });
        } else {
            this.setState({ currentView: 'score' });
            // No notification when quiz has been completed in a day.
            clearLocalNotification();
        }
        // Reset answer view.
        this.setState({ isAnswerView: false });
    }

    handleCorrectAnswer = () => {
        const { deck } = this.props.navigation.state.params
        const totalQuestions = deck.questions.length;
        let { currentCardIndex, correctAnswers } = this.state
        // Mark correct
        if (currentCardIndex < totalQuestions - 1) {
            this.setState({ correctAnswers: ++correctAnswers });
        }
        this.goToNextCard();
    }

    handleAnswerView = () => {
        this.setState({ isAnswerView: true });
    }

    handleQuestionView = () => {
        this.setState({ isAnswerView: false });
    }

    render() {
        const { deck } = this.props.navigation.state.params
        const { currentView, isAnswerView, currentCardIndex, correctAnswers } = this.state;
        return (
            <View style={styles.container}>
                {
                    currentView === 'score' ?
                        <View style={styles.container}>
                            <Text style={styles.text16}>Your score: {correctAnswers}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz', { deck })} style={styles.buttonBig}>
                                <Text>Restart Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail', { deck })} style={styles.buttonBig}>
                                <Text>Back to Deck</Text>
                            </TouchableOpacity>
                        </View>

                        :
                        <View>
                            <View style={quizStyles.questionContainer}>
                                <Text style={styles.text20}>{currentCardIndex + 1} /{deck.questions.length}</Text>
                                {isAnswerView ?
                                    <View>
                                        <Text style={styles.text16}>{deck.questions[currentCardIndex].answer}</Text>
                                        <TouchableOpacity onPress={this.handleQuestionView} style={styles.button}>
                                            <Text>Show Question</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View>
                                        <Text style={styles.text16}>{deck.questions[currentCardIndex].question}</Text>
                                        <TouchableOpacity onPress={this.handleAnswerView} style={styles.button}>
                                            <Text>Show Answer</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                            <TouchableOpacity onPress={this.handleCorrectAnswer} style={styles.buttonBig}>
                                <Text>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goToNextCard} style={styles.buttonBig}>
                                <Text>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        );
    }
}

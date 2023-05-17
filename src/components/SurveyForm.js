import React, { useState } from 'react';

const Survey = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(answers);
  //   // Do something with the answers, e.g. submit them to a server
  // };

  const questions = [
    {
      id: 1,
      text: 'What is your favorite color?',
      answers: [
        { text: 'Red', value: 'red' },
        { text: 'Blue', value: 'blue' },
        { text: 'Green', value: 'green' },
        { text: 'Yellow', value: 'yellow' },
      ],
    },
    {
      id: 2,
      text: 'What is your favorite food?',
      answers: [
        { text: 'Pizza', value: 'pizza' },
        { text: 'Burgers', value: 'burgers' },
        { text: 'Tacos', value: 'tacos' },
        { text: 'Sushi', value: 'sushi' },
      ],
    },
  ];

  return (
    <form>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          {question.answers.map((answer) => (
            <label key={answer.value}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={answer.value}
                checked={answers[question.id] === answer.value}
                onChange={() => handleAnswer(question.id, answer.value)}
              />
              {answer.text}
            </label>
          ))}
        </div>
      ))}
    </form>
  );
};

export default Survey;

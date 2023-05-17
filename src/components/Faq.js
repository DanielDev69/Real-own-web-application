import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      question: 'What is ReactJS?',
      answer: 'ReactJS is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What are the advantages of using ReactJS?',
      answer: 'ReactJS provides a simple and efficient way to create reusable UI components, making it easier to build complex and interactive UIs.',
    },
    {
      question: 'How can I get started with ReactJS?',
      answer: 'You can start by learning the basics of JavaScript and then move on to the ReactJS documentation to get a better understanding of how it works.',
    },
  ]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>{faq.question}</div>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;

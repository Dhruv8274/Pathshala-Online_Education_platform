import React from 'react';
import Card from './Card';
const cardsData = [
  {
    title: 'Class 10th Preparation',
    content: 'Collect all the necessary study materials, including textbooks, reference books, previous years question papers, and other relevant resources. These will aid in comprehensive preparation.',
  },
  {
    title: 'Class 12th Prepration',
    content: ' This will make it easier to locate specific information during revision.The official website of the National Council of Educational Research and Training (NCERT) provides access to the official textbooks and supplementary materials for class 12th. You can find detailed descriptions of each book and download them in PDF format',
  },
  {
    title: 'Classes Below 10th Prepration',
    content: 'Websites like Meritnation, TopperLearning, and Vedantu offer study materials, video lessons, and book descriptions specifically designed for class 12th students. These platforms provide comprehensive resources to support your exam preparation',
  },
];

const App = () => {
  return (
    <div className="maincard"style={{background:'rgb(208, 251, 208)'}}>
      <Card cards={cardsData} />
    </div>
  );
};

export default App;

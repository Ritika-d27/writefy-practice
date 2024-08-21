import React, { useState } from 'react';
import { CircleMinus } from 'lucide-react';
import '../styles/components/FAQ.css';

type Props = {}

const FAQ = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I find the right writer for my assignment?',
      answer:
        'Simply post your requirements and browse through the list of available writers. You can check their profiles, reviews, and ratings to select the best fit for your project.',
    },
    {
      question: 'How do I communicate with my writer?',
      answer:
        'Once you spend coins to connect with a writer, a chat window opens up. You can discuss your project details, share files, and provide feedback directly through the chat.',
    },
    {
      question: 'Are the writers genuine?',
      answer:
        'All the profiles undergo a verification check of the number email and samples. However personal verification through multiple profile visits is recommended.',
    },
  ];

  return (
    <section className="faq-section">
      <div className="container-faq">
        <div className="faq-title">FAQ’s</div>
        <div className="questions">
          {faqData.map((item, index) => (
            <div key={index} className="question">
              <div
                className="question-collapse"
                onClick={() => handleClickCollapse(index)}
              >
                <span className="question-text">{item.question}</span>
                <CircleMinus
                  className="collapse-icon"
                  size={24}
                  onClick={() => handleClickCollapse(index)}
                />
              </div>
              <div
                className={`answer ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {item.answer}
              </div>
              <div className="divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
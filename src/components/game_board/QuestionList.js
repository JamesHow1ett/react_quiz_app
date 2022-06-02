/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ANSWER_NUMBER, converUnicode } from './utils/helpers';

function QuestionList({ currentQuestion, onAnswer }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [answer, setAnswer] = useState({ text: '', index: -1 });

  useEffect(() => {
    setIsAnswered(false);
  }, [currentQuestion]);

  const liClasses = 'game__answer font-poppin';

  const handleUserAnswer = ({ item, idx }) => {
    if (isAnswered) {
      return;
    }

    setIsAnswered(true);
    setAnswer({
      text: item,
      index: idx,
    });

    setIsAnswered(true);
    setAnswer({
      text: item,
      index: idx,
    });
    onAnswer(item);
  };

  const liItem = ({
    item, idx, safeKey, classes = liClasses,
  }) => (
    <li
      key={safeKey}
      className={classes}
      // FIXME
      onKeyDown={() => {}}
      role="option"
      datatype={item}
      aria-selected
      onClick={() => handleUserAnswer({ item, idx })}
    >
      <span className="number">{ ANSWER_NUMBER[idx] }</span>
      <span className="content">{ converUnicode(item) }</span>
      <span className="icon icon-done">
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </span>
      <span className="icon icon-wrong">
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
        </svg>
      </span>
    </li>
  );

  const listItems = () => currentQuestion?.data?.options?.sort().map((item, idx) => {
    const safeKey = `${item}${idx}`;

    if (isAnswered) {
      let classes = '';

      if (answer.index === idx) {
        classes += ' clicked wrong';
      }
      if (item === currentQuestion?.data?.correct_answer) {
        classes += ' correct';
      }

      return liItem({
        item, idx, safeKey, classes: liClasses.concat(classes),
      });
    }

    return liItem({ item, idx, safeKey });
  });

  let answeredList;

  useEffect(() => {
    answeredList = listItems();
  }, [isAnswered]);

  return (
    <ul className="answers">{answeredList || listItems()}</ul>
  );
}

QuestionList.propTypes = {
  currentQuestion: PropTypes.shape({
    data: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string),
      correct_answer: PropTypes.string,
    }),
    index: PropTypes.number,
  }),
  onAnswer: PropTypes.func,
};

QuestionList.defaultProps = {
  currentQuestion: {},
  onAnswer: () => {},
};

export default QuestionList;

/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import api from '../services/Api';

export const useQuizQuestions = (quizOptions) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const parseQuestions = (apiData = []) => apiData.map((item) => ({
    ...item,
    options: [...item.incorrect_answers, item.correct_answer],
  }));

  const fetchData = (opt) => {
    try {
      setLoading(true);
      api(opt).then((res) => parseQuestions(res.results)).then(setQuestions);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    api(quizOptions)
      .then((res) => parseQuestions(res.results))
      .then(setQuestions)
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [quizOptions]);

  return { questions, loading, fetchData };
};

/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import api from '../Api';

export const useQuizQuestions = (quizOptions) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const parseQuestions = (apiData = []) => apiData.map((item) => ({
    ...item,
    options: [...item.incorrect_answers, item.correct_answer],
  }));

  const fetchData = async (opt) => {
    const { results } = await api(opt);
    return parseQuestions(results);
  };

  useEffect(() => {
    setLoading(true);
    fetchData(quizOptions)
      .then(setQuestions)
      .catch((e) => {
        console.warn(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { questions, loading };
};

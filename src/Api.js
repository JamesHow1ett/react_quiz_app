const baseUrl = 'https://opentdb.com/api.php';
// 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple'
const searchParams = new URLSearchParams();
searchParams.append('amount', 10);
searchParams.append('category', 22);
searchParams.append('difficulty', 'medium');
searchParams.append('type', 'multiple');

async function postData(data = {}) {
  const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
  return response.json(); // parses JSON response into native JavaScript objects
}

export default postData;

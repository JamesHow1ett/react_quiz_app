import { getSearchParams } from '../utils/utils';

const baseUrl = 'https://opentdb.com/api.php';

async function postData(data = null) {
  const searchParams = getSearchParams(data);

  const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
  return response.json();
}

export default postData;

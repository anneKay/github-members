import { fetchData } from '../utils/apiUtil';

export const getMemberList = async (history) => {
  try {
    const response = await fetchData('https://api.github.com/orgs/andela/members');
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return data;
  } catch(error) {
    return error
  }
};

export const fetchData = async (url) => {
  const headers = {
    // Authorization: 'b6b68fbd96b3892677191527d043d34fcfb3d143',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  try {
    const response = fetch(url, {...headers});
    return response;
  } catch(error) {
    throw error;
  }
};

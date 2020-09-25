export const fetchData = async (url) => {
  const headers = {
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

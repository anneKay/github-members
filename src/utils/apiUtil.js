export const fetchData = async () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  try {
    const response = fetch('https://test-archimides.free.beeceptor.com/api/getStories', {...headers});
    return response;
  } catch(error) {
    throw error;
  }
};

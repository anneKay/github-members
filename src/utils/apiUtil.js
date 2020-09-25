export const fetchData = async (url) => {
  const headers = {
    Authorization: '6145d0b3ab99483fb14c6b68d2b376a3702f8854',
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

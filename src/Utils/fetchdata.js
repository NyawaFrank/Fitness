export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '789dea37b8mshf65a212554447f5p19fd5ajsncc40dab2c801',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchdata = async (url, options) => {
  const response = await fetch (url, options);
  const data = await response.json ();

  return data;
};

export const exerciseOptions={
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };



export const fetchdata = async (url, options) => {
  const response = await fetch (url, options);
  const data = await response.json ();

  return data;
};
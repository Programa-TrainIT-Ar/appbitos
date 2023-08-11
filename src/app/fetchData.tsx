
const fetchData = async (method: string, url: string, body?: any) => {

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body || null
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response =  await fetch(url,options)
  const data = response.json()
  return data;
};


export default fetchData;




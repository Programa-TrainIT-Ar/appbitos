
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


// Test this
// [
//   {
//     "id": "c8b8e035-a69d-4a48-bc3e-231cef7bc04e",
//     "username": "Keven40",
//     "email": "Zechariah.Gibson24@hotmail.com",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg",
//     "password": "tTV7yyN61b9T4ap",
//     "birthdate": "2002-08-16T19:04:06.667Z",
//     "registeredAt": "2023-05-26T05:05:15.275Z"
//   },
//   {
//     "id": "d699bda3-da65-4a81-8e80-a1a2b0fc28c3",
//     "username": "Kirk_Block",
//     "email": "Agustin_Jaskolski@hotmail.com",
//     "avatar": "https://avatars.githubusercontent.com/u/15409278",
//     "password": "TEF_GnzhylPmuq8",
//     "birthdate": "1987-04-24T20:13:43.890Z",
//     "registeredAt": "2023-04-01T04:36:55.977Z"
//   },
//   {
//     "id": "be138d2e-ec6f-49b1-acc9-9ec44cfe54f4",
//     "username": "Kirsten_Raynor14",
//     "email": "Mark_Gusikowski31@gmail.com",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg",
//     "password": "tFdGKJv6e4GCQXm",
//     "birthdate": "1998-02-28T17:24:50.603Z",
//     "registeredAt": "2023-06-09T04:30:11.204Z"
//   },
//   {
//     "id": "041c2d7b-49b0-4669-b5eb-a842154372c6",
//     "username": "Luciano_Upton47",
//     "email": "Emerald4@yahoo.com",
//     "avatar": "https://avatars.githubusercontent.com/u/13601296",
//     "password": "Nj3ddQYnPFblzYT",
//     "birthdate": "1984-06-03T08:24:01.361Z",
//     "registeredAt": "2022-10-02T04:16:22.921Z"
//   },
//   {
//     "id": "4cea0197-3c58-4df0-a775-b4276ee43856",
//     "username": "Waldo_Hodkiewicz19",
//     "email": "Broderick_Walsh36@yahoo.com",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/395.jpg",
//     "password": "aRpS3SbcAFwJMhV",
//     "birthdate": "1949-10-30T19:15:49.606Z",
//     "registeredAt": "2023-04-03T22:03:32.273Z"
//   }
// ]

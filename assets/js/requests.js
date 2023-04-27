//Delete => DELETE
async function deleteData(url) {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) throw Error(response.status);
  return true;
}

deleteData('https://jsonplaceholder.typicode.com/posts/12')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


/*
//Update => PUT
async function putData(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);
  return response.json();

}

putData('https://jsonplaceholder.typicode.com/posts/12', {
  title: 'My title',
  description: 'My description text',
  body: 'My body Text',
  userId: 123
})

.then((data) => console.log(data))
.catch((err) => console.log(err));
*/
/*
//Update => PATCH ( will take same info only and replace it)
async function patchData(url, data) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);
  return response.json();

}

patchData('https://jsonplaceholder.typicode.com/posts/12', {
  title: 'My title',
  description: 'My description text',
  body: 'My body Text',
  userId: 123
})

.then((data) => console.log(data))
.catch((err) => console.log(err));
*/

/*
//create => POST
async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw Error(response.status);
  return response.json();

}

postData('https://jsonplaceholder.typicode.com/posts', {
  title: 'My title',
  description: 'My description text',
  body: 'My body Text',
  userId: 123
})

.then((data) => console.log(data))
.catch((err) => console.log(err));
*/

/*
//read => GET
async function getData(url) {
  const response = await fetch(url, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) throw fetch(url);
  return response.json();

}

getData('https://jsonplaceholder.typicode.com/posts')
.then((data) => console.log(data))
.catch((err) => console.log(err));

*/
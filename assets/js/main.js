const getData = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequests();

  xhr.open('GET', url);

  xhr.send();

  xhr.onload = () => {
   if (xhr.status !==200){
    return;
   }
    console.log(xhr);
  };

  xhr.onerror = (err) => console.log(err);
});

const search = 'Iron Man';

getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
.then((res) =>console.log(res))
.catch((err) => console.log(err));

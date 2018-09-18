import axios from 'axios';

export const getTodos: () => Promise<any> =
  () => axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data);


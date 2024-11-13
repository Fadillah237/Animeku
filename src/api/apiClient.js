import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://672e1f8a229a881691ef10d1.mockapi.io/list', // Ganti dengan URL Mock API Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

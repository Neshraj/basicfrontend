import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';

const Contact = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://basicbackend-bqnx.onrender.com/data?page=contact')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!data) {
    return <Loading />;
  }

  return <div>{data}</div>;
};

export default Contact;

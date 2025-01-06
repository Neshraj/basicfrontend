import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';

const About = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/data?page=about')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!data) {
    return <Loading />;
  }

  return <div>{data}</div>;
};

export default About;

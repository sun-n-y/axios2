import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDadJoke();
  }, []);

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;

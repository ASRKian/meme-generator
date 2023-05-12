import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import MainBody from './Components/MainBody';

function App() {

  const url = "https://meme-api.com/gimme/1";

  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [alt, setAlt] = useState('');
  let initialised = false;

  async function getQuote() {
    setLoading(false);
    setAlt("Loading meme");
    await axios.get(`${url}`)
      .then((responce) => {
        let data = responce.data;
        setImgUrl(data.memes[0].preview[data.memes[0].preview.length - 1]);
        setAlt("Meme not available!");
        setLoading(true);
      })
  }

  useEffect(() => {
    if (!initialised) {
      initialised = true;
      getQuote()
    }
  }, []);

  return (
    <div className='app-div'>
      <MainBody next={getQuote} img={imgUrl} alt={alt} loading={loading} />
    </div>
  );
}

export default App;

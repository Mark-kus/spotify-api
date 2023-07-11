import './App.css'
import { useState } from 'react'
import getResource from './utils/getResource'
import Player from "./components/Player";
import spotify from "./assets/spotify.svg";

function App() {
  const [data, setData] = useState()

  async function search(e) {
    // Request the resource
    setData(await getResource(e.target.value))
  }

  return (
    <>
      <div className='container'>
      <iframe src="https://open.spotify.com/embed/playlist/7tmqxXppNtc5XvWsBHUcFA?utm_source=generator" width="100%" height="355" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        {data?.name ?
          <div className='spotifyResults'>
            <img src={data.image} alt="Imagen de portada del recurso" width={300} />
            <div>
              <h2>{data.name}</h2>
              <p>{data.owner}</p>
            </div>
            <img src={spotify} alt="spotify logo" width={24} className='spotify-logo' />
            <Player />
          </div>
          : null}

        <div key={1} className='embedSpotify'>
          <input
            placeholder='Coloca aquí el link'
            className='input-spotify-link'
            onKeyDown={
              (e) => {
                if (e.key === "Enter" && e.target.value.length > 0) {
                  search(e)
                }
              }
            }
          />
        </div>
      </div>
    </>
  )
}

export default App

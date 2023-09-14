import { useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
import './songlist.css'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  // Simulo la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section className='row-container'>
      {
        loading
          ? <h2>Cargando...</h2>
          : list.map((song) => (
            <div key={song.id} className='row-song'>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))
        }
    </section>
  )
}
export default SongList

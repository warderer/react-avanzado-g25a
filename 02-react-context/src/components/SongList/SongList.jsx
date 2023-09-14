import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading } = useSongContext()

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

import { TrackItem } from './TrackItem'
import { useTracks } from '../bll/useTracks'
import styles from './TracksList.module.css'

type Props = {
  selectedTrackId: string | null
  onTrackSelect: (id: string | null) => void
}

export default function TracksList({ selectedTrackId, onTrackSelect }: Props) {
  const { tracks } = useTracks()

  if (tracks === null) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <p>No tracks</p>
      </>
    )
  }
  const handleResetClick = () => {
    onTrackSelect?.(null)
  }
  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId)
  }
  return (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <hr />
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          )
        })}
      </ul>
    </div>
  )
}

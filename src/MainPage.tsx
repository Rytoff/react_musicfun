import { useTrackSelection } from './bll/useTrackSelection'
import TracksList from './ui/TracksList'
import TrackDetail from './ui/TrackDetail'

export default function MainPage() {
  const { trackId, setTrackId } = useTrackSelection()
  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }
  return (
    <div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <TracksList
          onTrackSelect={handleTrackSelect}
          selectedTrackId={trackId}
        />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  )
}

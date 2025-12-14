import clsx from 'clsx'
import type { TrackListItemOutput } from '../dal/api'
import styles from './TracksList.module.css'

type Props = {
  isSelected: boolean
  onSelect: (trackId: string) => void
  track: TrackListItemOutput
}

export function TrackItem({ onSelect, isSelected, track }: Props) {
  const handleClick = () => onSelect?.(track.id)
  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected,
  })

  return (
    <li className={className} onClick={handleClick} key={track.id}>
      <h2>{track.attributes.title.toUpperCase()}</h2>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}

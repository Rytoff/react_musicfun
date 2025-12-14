export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

type AttachmentDto = {
  url: string
}

type TrackListItemOutputAttributes = {
  title: string
  attachments: Array<AttachmentDto>
}

type GetTrackDetailsOutput = { data: GetTrackDetailsOutputData }

export type TrackListItemOutput = {
  id: string
  attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = { data: Array<TrackListItemOutput> }

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }
  ).then((res) => res.json())
  return promise
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }
  ).then((res) => res.json())
  return promise
}

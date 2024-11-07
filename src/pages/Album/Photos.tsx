import { getAlbumPhotos } from "@/api/queries"
import { AlbumEntity } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { PhotoSkeletons } from "./PhotoSkeletons"

export const Photos = ({ albumId }: { albumId: AlbumEntity["id"] }) => {
  const {
    data: photos,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(albumId),
    queryKey: ["albums/photos", albumId],
    queryFn: () => getAlbumPhotos(Number(albumId)),
  })

  if (isLoading) {
    return <PhotoSkeletons />
  }

  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }

  if (!photos) {
    return <div>Album #{albumId} has no photos.</div>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {photos.map(({ id, title, thumbnailUrl }) => (
        <div key={id} className="flex flex-col gap-2 p-4 rounded-xl border">
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="w-full aspect-square rounded-xl bg-zinc-900"
          />
          <h2 className="md:text-xl">{title}</h2>
        </div>
      ))}
    </div>
  )
}

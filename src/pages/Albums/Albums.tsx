import { getAlbums } from "@/api/queries"
import { AlbumItem } from "@/components/common"
import { useQuery } from "@tanstack/react-query"
import { AlbumSkeletons } from "./AlbumSkeletons"

export const Albums = () => {
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  })

  if (isLoading) {
    return <AlbumSkeletons />
  }

  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }

  if (!albums) {
    return <p className="text-destructive">Can't get albums</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <AlbumItem key={album.id} data={album} />
      ))}
    </div>
  )
}

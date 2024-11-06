import { getAlbums } from "@/api/queries"
import { AlbumItem } from "@/components/ui"
import { useQuery } from "@tanstack/react-query"

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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {albums?.map((album) => (
        <AlbumItem key={album.id} data={album} />
      ))}
    </div>
  )
}

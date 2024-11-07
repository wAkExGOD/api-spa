import { getUserAlbums } from "@/api/queries"
import { UserEntity } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { AlbumSkeletons } from "./AlbumSkeletons"
import { AlbumItem } from "@/components/common"

export const Albums = ({ userId }: { userId: UserEntity["id"] }) => {
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(userId),
    queryKey: ["users/albums", userId],
    queryFn: () => getUserAlbums(userId as UserEntity["id"]),
  })

  if (isLoading) {
    return <AlbumSkeletons />
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!albums) {
    return <div>User #{userId} has no albums.</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {albums.map((album) => (
        <AlbumItem key={album.id} data={album} />
      ))}
    </div>
  )
}

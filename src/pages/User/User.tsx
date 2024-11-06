import { getUser, getUserAlbums } from "@/api/queries"
import { AlbumItem } from "@/components/ui"
import { UserEntity } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export const User = () => {
  const { id } = useParams()

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(id),
    queryKey: ["users", id],
    queryFn: () => getUser(Number(id)),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!user) {
    return <div>Unexpected error. No data was received</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p>{user.name}</p>
      </div>
      <Albums userId={user.id} />
    </div>
  )
}

const Albums = ({ userId }: { userId: UserEntity["id"] }) => {
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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!albums) {
    return <div>User #{userId} has no albums.</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {albums?.map((album) => (
        <AlbumItem data={album} />
      ))}
    </div>
  )
}

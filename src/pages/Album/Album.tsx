import { getAlbum } from "@/api/queries"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export const Album = () => {
  const { id } = useParams()

  const {
    data: album,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(id),
    queryKey: ["albums", id],
    queryFn: () => getAlbum(Number(id)),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return <div className="flex flex-col gap-2">{album?.title}</div>
}

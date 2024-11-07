import { getAlbum } from "@/api/queries"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { CreatorInfo } from "./CreatorInfo"
import { Photos } from "./Photos"

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
    return <div>Loading album data...</div>
  }

  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }

  if (!album) {
    return <p className="text-destructive">Can't get album #{id} data</p>
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">
          Album <span className="capitalize">«{album.title}»</span>
        </h1>
        <CreatorInfo userId={album.userId} />
      </div>
      <Photos albumId={Number(id)} />
    </div>
  )
}

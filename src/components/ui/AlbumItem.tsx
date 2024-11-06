import { routes } from "@/lib/routes"
import { AlbumEntity } from "@/types"
import { Link } from "react-router-dom"

export type AlbumItemProps = { data: AlbumEntity }

export const AlbumItem: React.FC<AlbumItemProps> = ({
  data: { id, userId, title },
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl border">
      <h1 className="flex flex-col gap-1">
        <Link
          to={routes.albums.album.create(id)}
          className="capitalize font-bold text-xl hover:underline"
        >
          {title}
        </Link>
        <span className="text-gray-400">#{id}</span>
      </h1>
      <span className="text-gray-600 mt-auto">User: #{userId}</span>
    </div>
  )
}

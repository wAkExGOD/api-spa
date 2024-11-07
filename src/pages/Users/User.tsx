import { routes } from "@/lib/routes"
import { UserEntity } from "@/types"
import { Link } from "react-router-dom"

type UserProps = {
  data: UserEntity
}

export const User: React.FC<UserProps> = ({ data }) => {
  const { id, name } = data

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl border">
      <Link to={routes.users.user.create(id)}>
        <h1>{name}</h1>
      </Link>
    </div>
  )
}

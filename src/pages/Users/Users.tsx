import { getUsers } from "@/api/queries"
import { routes } from "@/lib/routes"
import { UserEntity } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className="flex flex-col gap-2">
      {users?.map((user) => (
        <User key={user.id} data={user} />
      ))}
    </div>
  )
}

const User = ({ data }: { data: UserEntity }) => {
  const { id, name } = data

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl border">
      <Link to={routes.users.user.create(id)}>
        <h1>{name}</h1>
      </Link>
    </div>
  )
}

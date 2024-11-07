import { getUser } from "@/api/queries"
import { routes } from "@/lib/routes"
import { UserEntity } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export const CreatorInfo = ({ userId }: { userId: UserEntity["id"] }) => {
  const { data: user, isLoading } = useQuery({
    enabled: Boolean(userId),
    queryKey: ["user", userId],
    queryFn: () => getUser(Number(userId)),
  })

  if (isLoading) {
    return <p>Loading creator data...</p>
  }

  if (!user) {
    return <p className="text-destructive">Can't get user #{userId} data</p>
  }

  return (
    <p>
      Creator:{" "}
      <Link
        to={routes.users.user.create(user?.id)}
        className="font-semibold hover:underline"
      >
        {user?.name} {userId}
      </Link>
    </p>
  )
}

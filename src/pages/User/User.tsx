import { getUser } from "@/api/queries"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Albums } from "./Albums"

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
    return <div>Loading user data...</div>
  }

  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }

  if (!user) {
    return <div>Unexpected error. No data was received</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 p-4 rounded-xl border bg-zinc-950">
        <h1 className="font-bold text-2xl">{user.name}</h1>
        <div className="flex flex-col gap-1 text-zinc-500">
          <p>Username: {user.username}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${user.email}`} className="underline">
              {user.email}
            </a>
          </p>
          <p>Phone: {user.phone}</p>
          <p>
            Site:{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="underline"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>
      <Albums userId={user.id} />
    </div>
  )
}

import { Card, Skeleton } from "@/components/ui"

const PHOTOS_AMOUNT = 8

export const PhotoSkeletons = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: PHOTOS_AMOUNT }, (_, i) => (
        <Card key={i}>
          <Skeleton className="w-full aspect-square" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </Card>
      ))}
    </div>
  )
}

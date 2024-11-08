import { routes } from "@/lib/routes"
import { cn } from "@/lib/utils"
import { NavLink, Outlet } from "react-router-dom"

const headerLinks = [
  { link: routes.albums.root, label: "Albums" },
  { link: routes.users.root, label: "Users" },
] as const

export const Root = () => {
  return (
    <div className="min-h-[100vh] flex flex-col font-sans">
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border",
          "px-8 py-4 flex flex-row-reverse"
        )}
      >
        <ul className="flex gap-4">
          {headerLinks.map(({ link, label }) => (
            <li key={link}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  cn("text-gray-400", isActive && "text-white")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <div className="w-[1300px] max-w-full mx-auto px-4 py-6">
        <Outlet />
      </div>
      <footer
        className={cn(
          "w-full border-t border-border/40 bg-background/95 dark:border-border",
          "px-8 py-4 mt-auto flex justify-between gap-4 text-gray-400"
        )}
      >
        <p>Created by: Vladislav Panasik</p>
        <p>BSU 2024</p>
      </footer>
    </div>
  )
}

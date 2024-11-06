export const routes = {
  home: "/",
  users: {
    root: "users",
    user: {
      template: "/users/:id",
      create: (id: string | number) => `/users/${id}`,
    },
  },
  albums: {
    root: "albums",
    album: {
      template: "/albums/:id",
      create: (id: string | number) => `/albums/${id}`,
    },
  },
} as const

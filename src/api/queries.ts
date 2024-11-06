import { AlbumEntity, UserEntity } from "@/types"
import { request } from "./request"

export function getUsers() {
  return request<UserEntity[]>("/users")
}

export function getUser(id: UserEntity["id"]) {
  return request<UserEntity>(`/users/${id}`)
}

export function getAlbums() {
  return request<AlbumEntity[]>("/albums")
}

export function getUserAlbums(userId: UserEntity["id"]) {
  return request<AlbumEntity[]>(`/users/${userId}/albums`)
}

export function getAlbum(id: AlbumEntity["id"]) {
  return request<AlbumEntity>(`/albums/${id}`)
}

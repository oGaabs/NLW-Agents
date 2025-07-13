import { useQuery } from '@tanstack/react-query'

export type GetRoomsResponse = Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
}
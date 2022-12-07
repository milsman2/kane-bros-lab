import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { IPost } from '../../src/lib/interfaces/IPost'

const fetchPosts = async (limit = 10) => {
  const parsed: Array<IPost> = await ky('https://jsonplaceholder.typicode.com/posts').json()
  const result = parsed.filter((x) => x.id <= limit)
  return result
}

const usePosts = (limit: number) => {
  return useQuery(['posts', limit], () => fetchPosts(limit))
}

export { usePosts, fetchPosts }
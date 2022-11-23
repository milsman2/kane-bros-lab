// components/useRequest.js
import useSWR from 'swr'
const { data } = useSWR('https://www.users.com', (apiURL: string) => fetch(apiURL).then(res => res.json()))
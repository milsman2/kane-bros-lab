import { FC } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { IPerson } from '../../src/lib/interfaces/IPerson'

const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
    if (typeof id === 'string') {
        const res = await fetch(`/api/person/${id}`)
        if (res.ok) {
            return res.json()
        }
        throw new Error('error fetching user with id')
    }
    throw new Error('invalid id')
}

const PersonPage: FC = () => {
    const {
        query: {id},
    } = useRouter()
    const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id], () => getPersonById(id), {
        enabled: !!id,
    })

    if ( isLoading ) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    if ( isError ) return <p>Error: {error?.message}</p>

    return (
        <>
            <Link href="/">
                Home
            </Link>
            <p>{data?.currentStatus}</p>
        </>
    )
}

export default PersonPage
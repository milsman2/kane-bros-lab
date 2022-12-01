import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { IPerson } from '../../src/lib/interfaces/IPerson'

export const fetchPerson = async (): Promise<IPerson> => {
    const res = await fetch('/api/person');

    if (res.ok) {
        return res.json();
    }
    throw new Error('Network response not ok')
}

const PersonPage: FC = () => {
    const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error, IPerson, string>(
        'person',
        fetchPerson,
        {
            staleTime: 5 * 1000,
        }
    )

    if ( isLoading ) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    if ( isError ) return <p>Error! {error?.message}</p>

    return (
        <>
            <p>{data?.currentStatus}</p>
        </>
    )
}

export default PersonPage
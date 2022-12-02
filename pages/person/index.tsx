import { useQuery, UseQueryResult } from 'react-query'
import { IPerson } from '../../src/lib/interfaces/IPerson'
import Layout from '../../components/Layout'
import { NextPageWithLayout } from '../_app';

export const fetchPerson = async (): Promise<IPerson> => {
    const res = await fetch('/api/person');

    if (res.ok) {
        return res.json();
    }
    throw new Error('Network response not ok')
}

const PersonPage: NextPageWithLayout = () => {
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

PersonPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}
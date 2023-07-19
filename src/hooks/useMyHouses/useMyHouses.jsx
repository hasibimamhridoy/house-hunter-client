import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../axiousSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useMyHouses = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myHouses = [] } = useQuery({
        queryKey: ['myHouses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-house?email=${user?.email}`)
         
            return res.data;
        },
    })

    return [myHouses, refetch]

}
export default useMyHouses;
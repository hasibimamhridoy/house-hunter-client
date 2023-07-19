import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../axiousSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useMyBookings = () => {
    const { user, loading } = useAuth();

 

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myBooked = [] } = useQuery({
        queryKey: ['useMyBookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-get-bookings/${user?.email}`)
            return res.data;
        },
    })

    return [myBooked, refetch]

}
export default useMyBookings;
import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../axiousSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useMyBookingsHouse = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myBookings = [] } = useQuery({
        queryKey: ['myBookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-bookings-house?email=${user?.email}`)
        
            return res.data;
        },
    })

    return [myBookings, refetch]

}
export default useMyBookingsHouse;
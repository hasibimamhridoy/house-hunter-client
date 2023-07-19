import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../axiousSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useMyBookings = () => {
    const { user, loading } = useAuth();

    console.log(user);

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myBookings = [] } = useQuery({
        queryKey: ['useMyBookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-get-bookings/${user?.email}`)
            console.log(res);
            return res.data;
        },
    })

    return [myBookings, refetch]

}
export default useMyBookings;
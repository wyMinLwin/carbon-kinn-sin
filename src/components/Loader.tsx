import { useIsFetching } from '@tanstack/react-query'
import {useAppSelector} from "@/store";
import {HashLoader} from "react-spinners";

const Loader = () => {
    const isFetching = useIsFetching();
    const loading = useAppSelector(state => state.loader)
    return (
        (isFetching || loading) && <section
            className="bg-black/75 fixed top-0 z-[999] flex items-center justify-center w-screen h-screen overflow-hidden"
        >
            <HashLoader color={'#ffc300'} size={170} speedMultiplier={1.3} />
        </section>
    )
}

export default Loader;
import { useRouter } from 'next/router';


const CruiseLineDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className='p-[75px] text-3xl'>
            This page is under maintenance
        </div>
    );
};

export default CruiseLineDetail;
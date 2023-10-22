import { useRouter } from 'next/router';
import React from 'react';

const InterestDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className='p-[75px] text-3xl'>
            This page is under maintenance
        </div>
    );
};

export default InterestDetail;
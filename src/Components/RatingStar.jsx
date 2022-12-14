import React from 'react';
import { Rate } from 'antd';

const RatingStar = (ratingCount) => {
    let ratingNO = ratingCount.rating;

    return (
        <>
            <div>
                <Rate defaultValue={ratingNO} />
                <br />
            </div>
        </>
    )
    
}

export default RatingStar

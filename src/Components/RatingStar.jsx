import React from 'react';

import Rating from '@mui/material/Rating';

const RatingStar = ({ratingCount}) => {
    return (
        <>
            <div>
                <Rating value={ratingCount} />
                <br />
            </div>
        </>
    )
    
}

export default RatingStar

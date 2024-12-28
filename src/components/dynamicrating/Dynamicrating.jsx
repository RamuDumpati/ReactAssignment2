import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Dynamicrating.css';  

const Dynamicrating = () => {
  const [rating, setRating] = useState(2.5); 


  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <div className="center-box">  
      <div className="rating-box">  
       
        <h2 className="rating-heading">Dynamic Rating</h2>
        
        <Stack spacing={2} alignItems="center">
         
          <Rating
            name="half-rating"
            value={rating} //
            onChange={handleRatingChange} 
            precision={0.5}
            style={{ fontSize: '50px' }}
            sx={{ color: 'orange' }} 
          />
        </Stack>
        
        
        <p className="selected-rating">The rating is: {rating} stars</p>
      </div>
    </div>
  );
}

export default Dynamicrating;






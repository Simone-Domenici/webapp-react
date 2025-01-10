import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

export default function StarRating({ rating = 0, className = 'star-size ' }) {

    className += 'text-warning';

  return <div className='d-flex'>
    {[1,2,3,4,5].map((n) => {
      return n <= rating ? 
      <StarSolid key={n} className={className} /> : 
      <StarIcon key={n} className={className} />
    })}
  </div>
}
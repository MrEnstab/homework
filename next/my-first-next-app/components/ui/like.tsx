'use client'; 
import Link from 'next/link';
import Image from 'next/image';


import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        isLiked 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import ReviewsCard from './ReviewsCard' // Import your review card component

interface ReviewsProps {
  score: number
  comment: string
  profilePic: string
  name: string
}

const SwiperComponent: React.FC<{ reviews: ReviewsProps[] }> = ({
  reviews,
}) => {
  SwiperCore.use([Navigation, Pagination, Autoplay])
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2000, // Adjust delay (in milliseconds) for auto slide
        disableOnInteraction: false, // Ensures autoplay continues after user interaction
      }}
      navigation={false} // Disable navigation arrows
      pagination={false} // Disable pagination dots
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      style={{ padding: '20px' }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewsCard
            score={review.score}
            comment={review.comment}
            profilePic={review.profilePic}
            name={review.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent

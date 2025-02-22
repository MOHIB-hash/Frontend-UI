import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      amount: "$2,500",
      currency: "USD",
      description: "New York Pizza - $20",
    },
    {
      image:
        "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      amount: "$500",
      currency: "SGD",
      description: "Kiddo account",
    },
    {
      image:
        "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      amount: "$4,966",
      currency: "SGD",
      description: "Utility Bills",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              image={card.image}
              amount={card.amount}
              currency={card.currency}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

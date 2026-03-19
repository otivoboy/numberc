"use client";

import { motion } from 'framer-motion';
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    initials: "AO",
    name: "Alfred Owiti",
    role: "LIVING HEALTH",
    comment: "Number Craft transformed our financial reporting. As an NGO, donor compliance was always a challenge. Their team set up systems that made reporting seamless and accurate. We've renewed our contract for the third year!",
    rating: 5,
    image: "/alfred-owiti.jpg",
  },
  {
    initials: "DM",
    name: "Duncan Mboyah",
    role: "KENSJA",
    comment: "The audit support we received was exceptional. Peter's team identified control weaknesses we hadn't noticed and helped us strengthen our financial processes. Our board has never been more confident in our financial statements.",
    rating: 4.5,
    image: "/duncan-mboyah.jpg",
  },
  {
    initials: "JA",
    name: "Judy Amina",
    role: "SRHR",
    comment: "Their donor reporting service saved us during a critical audit. They prepared all financial reports for our European donor ahead of schedule. The attention to detail and understanding of donor requirements is impressive.",
    rating: 5,
    image: "/judy-amina.jpg",
  },
  {
    initials: "MB",
    name: "Martin Buyali",
    role: "AGJK",
    comment: "As a startup in the journalism sector, we needed proper accounting systems from day one. Number Craft set up everything - from chart of accounts to financial policies. Their ongoing support has been invaluable for our growth.",
    rating: 4,
    image: "/martin-buyali.jpg",
  },
  {
    initials: "OL",
    name: "Obed Lagat",
    role: "OSIL",
    comment: "The tax compliance support has been a game-changer. We used to struggle with deadlines and calculations. Now, all statutory deductions are filed accurately and on time. Their responsiveness is commendable.",
    rating: 4.5,
    image: "/obed-lagat.jpg",
  },
];

const Rating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex text-secondary">
            {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-5 h-5 fill-current" />)}
            {halfStar && <StarHalf key="half" className="w-5 h-5 fill-current" />}
            {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5" />)}
        </div>
    );
};

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Hear from Kenyan SMEs and NGOs who have trusted us with their financial management
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination-testimonials',
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-testimonials',
              prevEl: '.swiper-button-prev-testimonials',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-card rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-16 h-16 mr-4 text-xl font-bold">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-secondary/10 text-secondary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
                    "{testimonial.comment}"
                  </p>
                  <Rating rating={testimonial.rating} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-testimonials flex justify-center gap-2 mt-8" />
          
          <button className="swiper-button-prev-testimonials absolute top-1/2 -translate-y-1/2 left-0 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors disabled:opacity-0">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button className="swiper-button-next-testimonials absolute top-1/2 -translate-y-1/2 right-0 z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors disabled:opacity-0">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'




const Testimonial = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/reviewes')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle
                subheading={'what our client say'}
                heading={'Testimonial'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="px-20 flex flex-col items-center py-6">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className="text-yellow-400">{review.name}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>


        </div>
    );
};

export default Testimonial;
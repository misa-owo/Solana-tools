"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Navigation } from "swiper/modules"
interface Props {
    images: string[]
}
export default function ImageCarousel({ images }: Props) {
    return (
        <div className="mt-[5vh] w-full 2 m-auto mb-[10vh] md:my-0">
            <Swiper
                modules={[Navigation]}
                autoplay={{
                    disableOnInteraction: false, 
                }}
                slidesPerView={1}

            >
                {images.map(img_url => (
                    <SwiperSlide key={img_url}>
                        <div className="shadow-xl shadow-[#8952e0]/10 flex flex-col items-center w-full">
                            <Image
                                alt="Mountains"
                                layout="responsive"
                                width={1920} // provide an appropriate width
                                height={1080}

                                src={img_url}
                                sizes="100vw"

                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    </SwiperSlide>)
                )}

            </Swiper>
        </div>
    );
};

// import GSAP and ScrollTrigger
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register for GSAP 
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: '/images/people-1.jpg',
      company: 'PixelForge',
      contact:''
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: '/images/people-2.jpg',
      company: 'NexaWave',
      contact:''
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft',
      contact:''
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb',
      contact:''
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic',
      contact:''
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital',
      contact:''
    }
  ];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-side', {
      scrollTrigger:{
        trigger: '.scrub-side',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000',
    })
  });

  return (
    <div>
      <section 
      id="reviews"
      className="section overflow-hidden"
      >
        <div className="container">

            <h2 className="healine-2 mb-8 reveal-up">
                What My Customers say
            </h2>

            <div className="scrub-side flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgSrc, company}, key) => (
                    <ReviewCard
                        key={key}
                        content={content}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                    />
                ))}
            </div>
            
        </div>
      </section>
    </div>
  )
}

export default Review

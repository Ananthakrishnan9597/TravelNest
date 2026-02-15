import React, {useEffect} from "react";
import'./Main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";


import img from'../../assets/img (1).jpg'
import img2 from'../../assets/img (2).jpg'
import img3 from'../../assets/img (3).jpg'
import img4 from'../../assets/img (4).jpg'
import img6 from'../../assets/img (10).jpg'
import img7 from'../../assets/img (7).jpg'
import img8 from'../../assets/img (8).jpg'
import img9 from'../../assets/img (9).jpg'
import img11 from'../../assets/img (11).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:"The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Paris Getaway",
    location: "Paris, France",
    grade: "CULTURAL RELAX",
    fees: "$1300",
    description:"Explore the city of love with iconic landmarks like the Eiffel Tower, romantic streets, art museums, and world-class cuisine."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Tokyo Adventure",
    location: "Tokyo, Japan",
    grade: "CULTURAL RELAX",
    fees: "$1700",
    description:"A perfect mix of tradition and technology, Tokyo offers temples, neon city life, anime culture, and delicious street food."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Maldives Escape",
    location: "Maldives",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description:"Relax in crystal-clear waters, luxury water villas, white sand beaches, and peaceful island life—perfect for honeymooners."
  },
  {
    id: 5,
    imgSrc: img11,
    destTitle: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    grade: "CULTURAL RELAX",
    fees: "$1200",
    description:"Experience modern luxury with skyscrapers, desert safaris, shopping festivals, and world-famous attractions."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bali Nature Retreat",
    location: "Bali, Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$1700",
    description:"A tropical paradise with beaches, rice terraces, temples, yoga retreats, and peaceful natural beauty."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "New York City Tour",
    location: "New York, USA",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:"Discover the city that never sleeps with Times Square, Central Park, Broadway shows, and iconic city life."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal Tour",
    location: "Agra, Uttar Pradesh, India",
    grade: "CULTURAL RELAX",
    fees: "$1500",
    description:"The Taj Mahal is a world-famous white marble monument built by Emperor Shah Jahan. It is a symbol of love."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Sydney Highlights",
    location: "Sydney, Australia",
    grade: "CULTURAL RELAX",
    fees: "$1200",
    description:"Famous for its Opera House, beaches, harbor views, and relaxed lifestyle blended with urban excitement. It is a symbol of love."
  }
];


function Main(){
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

    return(
        <>
          <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-up" className="title">Most visited destinations</h3>
            </div>
            <div className="secContent grid">
                 {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                               <div className="imgDiv">
                                <img src={imgSrc} alt={destTitle} />
                               </div>
                               <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon" />
                                    <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span className="sit">{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                 <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn1 flex">DETAILS <BsClipboardCheck className="icon"/> </button>
                               </div>
                            </div>
                        )
                    })
                 }
            </div>
          </section>
        </>
    )
}
export default Main
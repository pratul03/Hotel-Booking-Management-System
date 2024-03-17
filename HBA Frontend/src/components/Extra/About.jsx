/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
// import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer from '../layout/Footer';
import './Extra.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='extrapage'>
            <div className='pgleft pgcommon'>
                <img src='https://images.pexels.com/photos/3771827/pexels-photo-3771827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='noimg' width="800px" />

                <div>
                    <h1>Our Story</h1>
                    <p>In a bustling city, an executive hotel epitomized luxury and service excellence. Its management orchestrated seamless operations, anticipating and exceeding guest expectations. Behind the scenes, they navigated hospitality intricacies with finesse, balancing guest satisfaction and efficiency. The hotel became a destination where every moment was a masterpiece of hospitality, thanks to their leadership. It wasn't just a place to stay; it was an experience, ensuring its enduring legacy in luxury travel..</p>

                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://images.pexels.com/photos/1397514/pexels-photo-1397514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='noimg' width="800" />

                <div>
                    <h1>Who are we</h1>
                    <p>In the realm of executive hotel management, we are the architects of unparalleled luxury and service. Our team orchestrates seamless operations, ensuring every guest experience exceeds expectations. Behind the scenes, we navigate the intricacies of hospitality with finesse, striking the perfect balance between guest satisfaction and operational efficiency. Our commitment transforms mere stays into unforgettable journeys, cementing our hotel as a beacon of excellence in the world of luxury travel.</p>

                </div>
            </div>
            <div className='pgleft pgcommon'>
                <img src='https://images.pexels.com/photos/3770110/pexels-photo-3770110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='noimg' width="800" />

                <div>
                    <h1>Moments</h1>
                    <p>In the realm of hotel management, we encounter a diverse array of challenges and uplifting moments. Balancing the demands of discerning guests while ensuring operational smoothness requires constant dedication and adaptability. However, within these challenges, there are also moments of profound joy. Witnessing guests' satisfaction, celebrating team achievements, and fostering meaningful connections with our clientele are the rewarding aspects that invigorate our commitment to excellence. These experiences remind us of the inherent value in our work and inspire us to continually elevate the standards of hospitality.</p>
                </div>
            </div>
            <Footer className="mb-0" />
        </div>
    )
}

export default About
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Footer from '../layout/Footer';

const TermsAndConditions = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='extrapage'>

            <div className='pgcont1'>
                <h3>Reservation and Payment:</h3>
                <p>All reservations are subject to availability and confirmation.
                    Payment must be made in full upon reservation unless otherwise agreed upon.
                    Cancellation policies may apply, and refunds are subject to these policies.</p>
            </div>
            <div className='pgcont1'>
                <h3>Guest Conduct:</h3>
                <p>Guests are expected to conduct themselves in a respectful manner towards staff and other guests.
                    Any disruptive behavior may result in immediate eviction without refund.</p>
            </div>

            <div className='pgcont1'>

                <h3>Room Policies:</h3>
                <p>Rooms are designated for the stated number of occupants only.
                    Any additional guests must be registered and may incur extra charges.</p>
            </div>

            <div className='pgcont1'>
                <h3>Facilities and Services:</h3>
                <p>Access to hotel facilities and services is subject to availability and may be restricted or modified without prior notice..</p>
            </div>

            <div className='pgcont1'>
                <h3>Liability:</h3>
                <p>The hotel is not liable for any loss, damage, or injury to guests' belongings or persons during their stay.</p>
            </div>

            <div className='pgcont1'>
                <h3>Privacy Policy:</h3>
                <p>Guest information is kept confidential and will not be shared with third parties without consent, except as required by law.</p>
            </div>
            <div className='pgcont1'>
                <h3>Miscellaneous:</h3>
                <p>These terms and conditions may be updated periodically without prior notice.
                    By making a reservation, guests agree to abide by all terms and conditions outlined herein.</p>

                <p>Please review these terms carefully before making a reservation. If you have any questions or concerns, please contact our reservations team for assistance.</p>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;
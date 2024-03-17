/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Footer from '../layout/Footer';

const PrivacyAndPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='extrapage'>
            <div className='pgcont1'>
                <h3>Collection of Information:</h3>
                <p>We collect personal information, including but not limited to, names, contact details, and payment information, for the purpose of processing reservations and providing personalized services.</p>
            </div>
            <div className='pgcont1'>
                <h3>Use of Information:</h3>
                <p>Personal information is used solely for the purpose of fulfilling guest requests and improving our services.
                    We may also use contact information to send promotional offers or updates, with the option to opt-out at any time.</p>
            </div>

            <div className='pgcont1'>

                <h3>Disclosure of Information:</h3>
                <p>We do not disclose personal information to third parties except as required by law or with explicit consent from the individual.
                    Service providers involved in reservation processing may have access to personal information, but they are bound by confidentiality agreements.</p>
            </div>

            <div className='pgcont1'>
                <h3>Security Measures:</h3>
                <p>We implement security measures to protect personal information from unauthorized access, alteration, or disclosure.
                    Secure payment processing systems are used to safeguard financial information during transactions.</p>
            </div>

            <div className='pgcont1'>
                <h3>Access and Correction:</h3>
                <p>Guests have the right to access and correct their personal information held by us. Requests for access or correction can be made by contacting our privacy officer.</p>
            </div>

            <div className='pgcont1'>
                <h3>Policy Updates:
                </h3>
                <p>This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. Updates will be posted on our website.
                    By making a reservation or using our services, guests consent to the collection, use, and disclosure of their personal information in accordance with this privacy policy.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyAndPolicy;
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Footer from '../layout/Footer';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [activesection, setactivesection] = useState(0)


    const faq = [
        {
            id: 1,
            question: 'How do I make a reservation on your website?',
            answer: 'Making a reservation is easy! Simply navigate to our booking page, select your desired dates, room type, and any additional preferences, then follow the prompts to complete your reservation securely.'
        },
        {
            id: 2,
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods, including major credit cards, debit cards, and online payment platforms. Rest assured, all transactions are encrypted and secure.'
        },
        {
            id: 3,
            question: 'Can I modify or cancel my reservation?',
            answer: 'Yes, you can modify or cancel your reservation depending on the terms and conditions associated with your booking. Please refer to your confirmation email or contact our reservations team for assistance.'
        },
        {
            id: 4,
            question: 'Are there any special offers or discounts available?',
            answer: 'We frequently offer special promotions and discounts on our website. Be sure to check our promotions page or subscribe to our newsletter for exclusive deals and offers.'
        },
        {
            id: 5,
            question: 'What amenities and services are included with my reservation?',
            answer: 'Your reservation may include complimentary amenities such as breakfast, Wi-Fi, or access to our fitness center or pool. Specific inclusions vary depending on the room type and package booked. You can find detailed information on our website or contact our staff for assistance.'
        }
    ]

    return (
        <div className='extrapage'>
            {/* <p>faq</p> */}

            <div className='faqcontainer'>

                {
                    faq.map((item) => {
                        return (
                            activesection == item.id ?
                                <div className='faq'>
                                    <div className='faqhead'>
                                        <h1>
                                            {item.question}
                                        </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                                            onClick={() => setactivesection(0)}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className='faqbody'>
                                        <p>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                                :
                                <div className='faq'>
                                    <div className='faqhead'>
                                        <h1>{item.question}</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                                            onClick={() => setactivesection(item.id)}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </div>
                                </div>
                        )
                    })
                }


            </div>


            <Footer />
        </div>
    )
}

export default FAQ;
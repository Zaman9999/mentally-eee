import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import faq2 from '../../assets/faq2.png';
import faq1 from '../../assets/faq1.png';

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'How do you provide Support?',
            answer:
                'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur, ipsam nemo aliquam deserunt totam cupiditate est neque qui saepe nostrum nisi, adipisci mollitia ea? ',
            isOpen: false,
        },
        {
            question: 'How Mentally-e Help Me?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur, ipsam nemo aliquam deserunt totam cupiditate est neque qui saepe nostrum nisi, adipisci mollitia ea?',
            isOpen: false,
        },
        {
            question: 'Do You Offer Refund?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur, ipsam nemo aliquam deserunt totam cupiditate est neque qui saepe nostrum nisi, adipisci mollitia ea?',
            isOpen: false,
        },
        {
            question: 'Is there any WordPress version minimal requirement?',
            answer:
            'We believe in the adage “catch them while they are young”. The self assessment tests will rightly give us a clear picture regarding the talents and interests of children.These are the formative years where dreams have no boundaries and fears are less compared to the later growing stages. However to identify the most suitable career, is the challenge and this is where our mentorship programme can add value. We provide a hand holding process to take them to their destination by a series of mentoring sessions scientifically designed for this purpose',
            isOpen: false,
        },
        {
            question: 'How do I download the plugin files after the purchase?',
            answer:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis in est exercitationem pariatur odit veniam quibusdam. Quasi accusantium adipisci commodi unde temporibus.',
            isOpen: false,
        },
    ]);

    const toggleFaq = (index) => {
        const updatedFaqs = faqs.map((faq, i) => ({
            ...faq,
            isOpen: i === index ? !faq.isOpen : false,
        }));
        setFaqs(updatedFaqs);
    };

    return (
        <div className='w-full h-full bg-[#F4F8FF] relative pb-4'>
            <img className='absolute top-0 right-0 w-24 sm:w-48 lg:w-60 xl:w-72' src={faq2} alt='image' />
            <div className='wrapper'>
                <div className='p-10'>
                    <div className='text-center mt-12 flex flex-col gap-4'>
                        <h1 className='text-black text-2xl sm:text-3xl md:text-4xl  leading-10 dm-sans'>
                            Frequently Asked <span className='text-blue-500'>Questions</span>
                        </h1>
                        <p className='text-base sm:text-lg md:text-xl lg:text-xl text-gray-400'>
                            Do you have a question about the mentally-e? See the list below for <br className="hidden sm:block" />our most frequently asked questions.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='lg:w-3/4 h-auto overflow-y-auto mt-6 md:w-3/4 sm:w-3/4'>
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-item ${faq.isOpen ? 'open' : ''}`}>
                                    <div className='flex justify-between items-center mt-8' onClick={() => toggleFaq(index)}>
                                        <h1 className='text-base sm:text-lg font-medium' style={{ color: faq.isOpen ? '#3182FF' : 'inherit' }}>{faq.question}</h1>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFaq(index);
                                            }}
                                            className='transform transition-transform duration-500 ease-in-out'
                                            style={{ transform: faq.isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        >
                                            <SlArrowDown />
                                        </button>
                                    </div>
                                    <div className='faq-answer'>
                                        <p className='mt-2 text-base sm:text-lg md:text-lg text-gray-500'>{faq.answer}</p>
                                    </div>
                                    {!faq.isOpen && <div className="h-px bg-[#D4D4D4] w-full mt-6"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute bottom-0 left-0 w-16 sm:w-32 lg:w-40 xl:w-56' src={faq1} alt='image' />
        </div>
    );
};

export default Faq;

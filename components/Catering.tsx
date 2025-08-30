import React, { useState, useEffect } from 'react';
import { SectionTitle } from './SectionTitle.tsx';
import { CloseIcon } from './Icons.tsx';

interface CateringProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

export const Catering = ({ isModalOpen, setIsModalOpen }: CateringProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guests: '',
        message: '',
        captcha: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    const generateCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
    }

    useEffect(() => {
        generateCaptcha();
    }, []);
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // Restore scrolling
        };
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
        // After a successful submission, reset the form when the modal is closed.
        if (submissionStatus === 'success') {
            setFormData({
                name: '', email: '', phone: '', eventDate: '', guests: '', message: '', captcha: '',
            });
            setErrors({});
            setSubmissionStatus('idle');
            generateCaptcha();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.eventDate) {
            newErrors.eventDate = 'Event Date is required.';
        } else if (new Date(formData.eventDate) < new Date(new Date().setHours(0, 0, 0, 0))) {
            newErrors.eventDate = 'Event Date cannot be in the past.';
        }
        if (!formData.guests) {
            newErrors.guests = 'Number of Guests is required.';
        } else if (parseInt(formData.guests, 10) <= 0) {
            newErrors.guests = 'Number of Guests must be a positive number.';
        }
        if (!formData.captcha) {
            newErrors.captcha = 'Please answer the security question.';
        } else if (parseInt(formData.captcha, 10) !== (num1 + num2)) {
            newErrors.captcha = 'Incorrect answer. Please try again.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submissionStatus === 'submitting' || submissionStatus === 'success') return;

        if (validateForm()) {
            setSubmissionStatus('submitting');
            const { captcha, ...formDataForSubmission } = formData;
            
            const encode = (data: { [key: string]: any }) => {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                    .join("&");
            };

            try {
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "catering-inquiries", ...formDataForSubmission }),
                });

                if (response.ok) {
                    setSubmissionStatus('success');
                } else {
                    console.error("Form submission failed:", response.status);
                    setSubmissionStatus('error');
                }
            } catch (error) {
                console.error("Form submission error:", error);
                setSubmissionStatus('error');
            }
        }
    };
    
    const getInputClasses = (fieldName: keyof typeof errors) => {
        const baseClasses = "w-full bg-neutral-800 border rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2";
        const errorClasses = "border-red-500 ring-red-500";
        const normalClasses = "border-neutral-700 focus:ring-primary-yellow focus:border-primary-yellow";
        return `${baseClasses} ${errors[fieldName] ? errorClasses : normalClasses}`;
    };

    return (
        <section id="catering" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <SectionTitle>Catering</SectionTitle>
                    <p className="text-lg text-neutral-300 mb-10">
                        Bring the flavor of Dem Boyz BBQ to your next event! We cater parties, corporate events, weddings, and more.
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-4 inline-block bg-fire-gradient text-black font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform hover:scale-105 duration-300"
                    >
                        Cater With Us
                    </button>
                </div>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="catering-modal-title"
                    >
                        <div
                            className="bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 sm:p-8">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-10 p-1"
                                    aria-label="Close catering form"
                                >
                                    <CloseIcon />
                                </button>
                                
                                {submissionStatus === 'success' ? (
                                    <div className="text-center py-10 flex flex-col items-center">
                                        <h3 id="catering-modal-title" className="text-3xl font-bold text-accent-green mb-4">Inquiry Sent!</h3>
                                        <p className="text-neutral-300 max-w-md">Thank you for reaching out! We've received your catering request and will get back to you shortly.</p>
                                        <button onClick={closeModal} className="mt-8 bg-fire-gradient text-black font-bold py-2 px-6 rounded-full text-base uppercase transition-transform hover:scale-105 duration-300">Close</button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 id="catering-modal-title" className="text-3xl font-bold text-primary-yellow mb-6">Catering Inquiry</h2>
                                        <form
                                            name="catering-inquiries"
                                            method="POST"
                                            data-netlify="true"
                                            data-netlify-honeypot="bot-field"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                            noValidate
                                        >
                                            <input type="hidden" name="form-name" value="catering-inquiries" />
                                            <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
                                        
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-primary-yellow mb-2">Full Name</label>
                                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={getInputClasses('name')} placeholder="John Doe" aria-invalid={!!errors.name} aria-describedby="name-error" />
                                                    {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-primary-yellow mb-2">Email Address</label>
                                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={getInputClasses('email')} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby="email-error" />
                                                    {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-primary-yellow mb-2">Phone Number</label>
                                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={getInputClasses('phone')} placeholder="(555) 123-4567" />
                                                </div>
                                                <div>
                                                    <label htmlFor="eventDate" className="block text-sm font-medium text-primary-yellow mb-2">Event Date</label>
                                                    <input type="date" name="eventDate" id="eventDate" required value={formData.eventDate} onChange={handleChange} className={getInputClasses('eventDate')} aria-invalid={!!errors.eventDate} aria-describedby="date-error" />
                                                    {errors.eventDate && <p id="date-error" className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="guests" className="block text-sm font-medium text-primary-yellow mb-2">Number of Guests</label>
                                                    <input type="number" name="guests" id="guests" required min="1" value={formData.guests} onChange={handleChange} className={getInputClasses('guests')} placeholder="50" aria-invalid={!!errors.guests} aria-describedby="guests-error" />
                                                    {errors.guests && <p id="guests-error" className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-primary-yellow mb-2">Additional Details</label>
                                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-neutral-800 border border-neutral-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow" placeholder="Tell us about your event, any special requests, etc."></textarea>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="captcha" className="block text-sm font-medium text-primary-yellow mb-2">Security Check</label>
                                                <div className="flex items-center flex-wrap gap-x-3">
                                                    <span className="text-white">What is {num1} + {num2} ?</span>
                                                    <input type="number" name="captcha" id="captcha" required value={formData.captcha} onChange={handleChange} className={`${getInputClasses('captcha')} w-24`} aria-invalid={!!errors.captcha} aria-describedby="captcha-error" />
                                                </div>
                                                {errors.captcha && <p id="captcha-error" className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
                                            </div>
                                            
                                            <div className="text-center">
                                                <button type="submit" disabled={submissionStatus === 'submitting'} className={`mt-4 inline-block bg-fire-gradient text-black font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg uppercase transition-all duration-300 ${submissionStatus === 'submitting' ? 'opacity-50 cursor-wait' : 'hover:scale-105'}`}>
                                                    {submissionStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                                                </button>
                                                {submissionStatus === 'error' && <p className="mt-4 text-red-500">Oops! Something went wrong. Please try again.</p>}
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
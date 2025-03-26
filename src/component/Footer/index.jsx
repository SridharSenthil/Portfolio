import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import SocialIcon from '../SocialIcon';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Footer = () => {

    const sendMail = ( values, {resetForm}) => {
        const serviceId = "service_sridharsenthil97";
        const templateId = "template_d93ksmb";
        const publicKey = "-VmUOZWDtOUYSvkZe";

        const templateParams = {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,r
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Message sent successfully!");
                resetForm();
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send message. Try again later.");
            });
    };


    return (
        <div className='w-full h-auto px-[85px] py-[30px] flex justify-between mb-[40px]'>

            <div className='w-auto h-auto flex flex-col gap-[20px]'>
                <span className='text-main-title text-[#ffffff]'>LET'S CONNECT</span>
                <div className='flex flex-col gap-[8px]'>
                    <span className='text-primeText'>say hello at <a href='mailto:sridharsenthil97@gmail.com' className='underline decoration-primary'>sridharsenthil97@gmail.com</a></span>
                    <span className='text-primeText'>For more info, here's my <a href='/SRIDHAR SENTHILNATHAN.pdf' download="SRIDHAR SENTHILNATHAN.pdf" className='underline decoration-primary' >resume</a></span>
                </div>
                <div className='flex gap-[12px]'>
                    <SocialIcon
                        url="https://www.linkedin.com/in/sridhar-senthilnathan-ab87032a5"
                        Icon={FaLinkedin}
                        color="#D3E97A"
                    />
                    <SocialIcon
                        url="https://github.com/SridharSenthil"
                        Icon={FaGithub}
                        color="#D3E97A"
                    />
                    <SocialIcon
                        url="https://www.instagram.com/sridhar.techie/"
                        Icon={FaInstagram}
                        color="#D3E97A"
                    />
                </div>
            </div>

            <div className='w-full max-w-[500px] h-auto'>
                <Formik
                    initialValues={{ name: "", email: "", subject: "", message: "" }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name is required"),
                        email: Yup.string().email("Invalid email").required("Email is required"),
                        subject: Yup.string().required("Subject is required"),
                        message: Yup.string().required("Message is required"),
                    })}
                    onSubmit={sendMail}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            
                            <div>
                                <label className="block font-medium text-link-text text-primeText">Name</label>
                                <Field type="text" name="name" className="w-full p-2 border rounded bg-gray-200" placeholder="Enter your name" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block font-medium text-link-text text-primeText">Email</label>
                                <Field type="email" name="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block font-medium text-link-text text-primeText">Subject</label>
                                <Field type="text" name="subject" className="w-full p-2 border rounded" placeholder="Enter subject" />
                                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block font-medium text-link-text text-primeText">Message</label>
                                <Field as="textarea" name="message" className="w-full p-2 border rounded h-24" placeholder="Enter your message" />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-black py-2 rounded hover:bg-[#d3e97a90] transition">
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Footer;
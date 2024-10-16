import React from 'react';

function Contact() {
    return (
        <div>
            <div style={{ backgroundColor: "wheat" }}>
                <div className="container py-4">
                    <h1 className='fw-bold'>Contact Us</h1>
                    <p>
                        <i style={{ fontWeight: "600" }}>
                            We are pleased to provide you with the essential details regarding the location and means of
                            communication for our church community.
                        </i>
                    </p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row g-0">
                    <div className="col-lg-6 col-md-12">
                        <form>
                            <label className='my-2' htmlFor="full_name">
                                <i style={{ fontWeight: "500" }}>Full Name:</i>
                            </label>
                            <input type="text" name='fname' id='fname' className='form-control' />
                            <label className='my-2' htmlFor="email">
                                <i style={{ fontWeight: "500" }}>Email:</i>
                            </label>
                            <input type="email" name='email' id='email' className='form-control' />
                            <label className='my-2' htmlFor="phone">
                                <i style={{ fontWeight: "500" }}>Phone:</i>
                            </label>
                            <input type="number" name='phone' id='phone' className='form-control' />
                            <label className='my-2' htmlFor="message">
                                <i style={{ fontWeight: "500" }}>Message:</i>
                            </label>
                            <textarea name="message" id="message" className='form-control' rows={4} />
                            <button type="submit" className='btn btn-warning mt-2 h6 fw-bold py-3 px-5'>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-12 ps-4 mt-4">
                        <hr /><hr /><hr /><hr /><hr /><hr /><hr />
                        <h5 style={{ fontWeight: "700" }}>OUR ADDRESS</h5>
                        <div className="row g-0">
                            <div className="col-6">
                                <p>
                                    <i>Kanku Taiwo, Abaa Alfa, Akobo, Ibadan.</i>
                                </p>
                            </div>
                            <div className="col-6">
                                <p className='my-0'>
                                    <i>Phone : +234 806 762 6646, +234 816 722 5028</i>
                                </p>
                                <p className='my-0'>
                                    <i>Email : nigbakunlelookie@gmail.com</i>
                                </p>
                            </div>
                        </div>
                        <hr /><hr /><hr /><hr /><hr /><hr /><hr />
                    </div>
                </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.64635003723!2d3.774681474364953!3d7.393465712444105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398ae4516b27f3%3A0x75340b0ce6867549!2sTaiwo%20St%2C%20Balogun%20200131%2C%20Oyo!5e0!3m2!1sen!2sng!4v1729101489858!5m2!1sen!2sng"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-100'
                        />
            </div>
        </div>
    );
}

export default Contact;
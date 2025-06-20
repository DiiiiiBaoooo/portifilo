import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS with your public key
  
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fixed typo from prevemtDefault
    setLoading(true);
    try {
      await emailjs.send('service_uin936k', 'template_c1a3nxa', {
        from_name: form.name,
        name: form.name,
        time: new Date().toLocaleString(), // Dynamic time value
        message: form.message,
        email: form.email,
        to_email: 'nguyenduybaodt1821@gmail.com', // Add if required by your template
      },'1S5qeE4KwTBuLq5iY');
      setLoading(false);
      alert('Email sent successfully!');
      setForm({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setLoading(false);
      console.error('EmailJS error:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <section className="c-space my-20 mt-28">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container mt-32">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            Hi Hihihhiihihihihihihihihhihihiihhihihiihihihihihih
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Nhập tên..."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Nhập Email..."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Gửi tin nhắn ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending ...' : 'Gửi tin nhắn'}
              <img
                src="/assets/arrow-up.png"
                className="field-btn_arrow"
                alt="arrow icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
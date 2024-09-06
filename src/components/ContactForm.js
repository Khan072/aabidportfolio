import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          'service_1adczqp', // Replace with your EmailJS service ID
          'template_khoh0t5', // Replace with your EmailJS template ID
          formData,
          '45W992eM162F_FSmd' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <FormContainer>
      {isSubmitted ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {formErrors.name && <p>{formErrors.name}</p>}
          </FormField>

          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            {formErrors.email && <p>{formErrors.email}</p>}
          </FormField>

          <FormField>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            {formErrors.subject && <p>{formErrors.subject}</p>}
          </FormField>

          <FormField>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            />
            {formErrors.message && <p>{formErrors.message}</p>}
          </FormField>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      )}
    </FormContainer>
  );
};

export default ContactForm;

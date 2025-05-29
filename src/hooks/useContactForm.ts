import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement Firebase submission
      console.log("Form data to submit:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Message sent successfully! We will get back to you soon.");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

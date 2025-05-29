import styled from '@emotion/styled';
import { Calendar, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { theme } from '../theme';
import { breakpoints } from '../theme/breakpoints';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { useContactForm } from '../hooks';

const ContactContainer = styled.section`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
`;

const ContactContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
  background: linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BookingCard = styled(Card)``;

const ContactFormCard = styled(Card)``;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.white};
`;

const CardDescription = styled.p`
  color: ${theme.colors.primary[200]};
  margin-bottom: ${theme.spacing[6]};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
`;

const ContactInfo = styled.div`
  padding-top: ${theme.spacing[6]};
  border-top: 1px solid rgba(147, 51, 234, 0.2);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[4]};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.primary[200]};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[6]};
  padding-top: ${theme.spacing[4]};
`;

const SocialIcon = styled.div`
  color: ${theme.colors.primary[300]};
  cursor: pointer;
  transition: color ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut};

  &:hover {
    color: ${theme.colors.secondary[400]};
  }
`;

interface ContactProps {
  onBookingClick: () => void;
}

export const Contact = ({ onBookingClick }: ContactProps) => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle>Connect With Me</SectionTitle>
        <ContactGrid>
          <BookingCard>
            <CardTitle>Book a Session</CardTitle>
            <CardDescription>
              Ready to unlock your destiny? Schedule your personal reading today.
            </CardDescription>
            <Button fullWidth onClick={onBookingClick}>
              <Calendar size={20} style={{ marginRight: theme.spacing[2] }} />
              Schedule Now
            </Button>
          </BookingCard>

          <ContactFormCard>
            <CardTitle>Get in Touch</CardTitle>
            <ContactForm onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
              />
              {/* TODO: Add reCAPTCHA here */}
              <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </ContactForm>

            <ContactInfo>
              <ContactDetails>
                <ContactItem>
                  <Phone size={20} />
                  <span>(555) 123-MYSTIC</span>
                </ContactItem>
                <ContactItem>
                  <Mail size={20} />
                  <span>hello@mysticritika.com</span>
                </ContactItem>
              </ContactDetails>
              <SocialLinks>
                <SocialIcon>
                  <Instagram size={24} />
                </SocialIcon>
                <SocialIcon>
                  <Facebook size={24} />
                </SocialIcon>
              </SocialLinks>
            </ContactInfo>
          </ContactFormCard>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

import styled from "@emotion/styled";
import { Star } from "lucide-react";
import { theme } from "../theme";
import { Card } from "../components/Card";
import { useTestimonialRotation } from "../hooks";
import type { Testimonial } from "../data/types";

const TestimonialsContainer = styled.section`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  background: rgba(0, 0, 0, 0.2);
`;

const TestimonialsContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing[16]};
  background: linear-gradient(
    to right,
    ${theme.colors.primary[400]},
    ${theme.colors.secondary[400]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TestimonialCard = styled(Card)`
  padding: ${theme.spacing[8]};
  min-height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialContent = styled.div`
  transition: all 500ms ${theme.transitions.easing.easeInOut};
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing[4]};
  gap: ${theme.spacing[1]};
`;

const TestimonialText = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.primary[100]};
  margin-bottom: ${theme.spacing[4]};
  font-style: italic;
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const TestimonialAuthor = styled.p`
  color: ${theme.colors.primary[300]};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const TestimonialIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[6]};
`;

const Indicator = styled.button<{ active: boolean }>`
  width: ${theme.spacing[3]};
  height: ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  border: none;
  background: ${({ active }) =>
    active ? theme.colors.primary[400] : "rgba(147, 51, 234, 0.3)"};
  cursor: pointer;
  transition: all ${theme.transitions.duration.normal}
    ${theme.transitions.easing.easeInOut};

  &:hover {
    background: ${theme.colors.primary[400]};
  }
`;

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const { activeIndex, activeTestimonial, goToTestimonial } =
    useTestimonialRotation({ testimonials });

  if (!activeTestimonial) return null;

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsContent>
        <SectionTitle>What Seekers Say</SectionTitle>
        <TestimonialCard>
          <TestimonialContent>
            <StarRating>
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={theme.colors.secondary[400]}
                  color={theme.colors.secondary[400]}
                />
              ))}
            </StarRating>
            <TestimonialText>"{activeTestimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {activeTestimonial.name}</TestimonialAuthor>
          </TestimonialContent>
        </TestimonialCard>
        <TestimonialIndicators>
          {testimonials.map((_, index) => (
            <Indicator
              key={index}
              active={index === activeIndex}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </TestimonialIndicators>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

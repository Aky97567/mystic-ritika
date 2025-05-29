import styled from "@emotion/styled";
import { Star, Sun, Sparkles, Moon } from "lucide-react";
import { theme } from "../theme";
import { breakpoints } from "../theme/breakpoints";
import { Card } from "../components/Card";
import type { Service } from "../data/types";

const ServicesContainer = styled.section`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
`;

const ServicesContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakpoints.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled(Card)`
  text-align: center;

  &:hover .service-icon {
    color: ${theme.colors.secondary[400]};
  }
`;

const ServiceIcon = styled.div`
  color: ${theme.colors.primary[400]};
  margin-bottom: ${theme.spacing[4]};
  transition: color ${theme.transitions.duration.normal}
    ${theme.transitions.easing.easeInOut};
`;

const ServiceTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.white};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.primary[200]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[4]};
`;

const ServiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServicePrice = styled.span`
  color: ${theme.colors.primary[300]};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ServiceDuration = styled.span`
  color: ${theme.colors.primary[400]};
  font-size: ${theme.typography.fontSize.sm};
`;

const iconMap = {
  Star: Star,
  Sun: Sun,
  Sparkles: Sparkles,
  Moon: Moon,
};

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <SectionTitle>Sacred Services</SectionTitle>
        <ServicesGrid>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ServiceCard key={service.id} hover>
                <ServiceIcon className="service-icon">
                  <IconComponent size={32} />
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceDetails>
                  <ServicePrice>{service.price}</ServicePrice>
                  <ServiceDuration>{service.duration}</ServiceDuration>
                </ServiceDetails>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

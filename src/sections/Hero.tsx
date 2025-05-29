import styled from '@emotion/styled';
import { Calendar } from 'lucide-react';
import { theme } from '../theme';
import { breakpoints } from '../theme/breakpoints';
import { Button } from '../components/Button';
import { useVisibility } from '../hooks';

const HeroContainer = styled.section<{ isVisible: boolean }>`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  transition: all 1000ms ${theme.transitions.easing.easeInOut};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: ${({ isVisible }) => isVisible ? 'translateY(0)' : 'translateY(2.5rem)'};
`;

const HeroContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing[6]};
  background: linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]}, ${theme.colors.indigo[400]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: ${theme.typography.lineHeight.tight};

  ${breakpoints.md} {
    font-size: ${theme.typography.fontSize['7xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing[8]};
  color: ${theme.colors.primary[200]};
  line-height: ${theme.typography.lineHeight.relaxed};

  ${breakpoints.md} {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  justify-content: center;

  ${breakpoints.sm} {
    flex-direction: row;
  }
`;

interface HeroProps {
  onBookingClick: () => void;
}

export const Hero = ({ onBookingClick }: HeroProps) => {
  const isVisible = useVisibility(100);

  return (
    <HeroContainer isVisible={isVisible}>
      <HeroContent>
        <HeroTitle>Unlock Your Destiny</HeroTitle>
        <HeroSubtitle>
          Welcome, seeker. I am Ritika, your guide through the mysteries of the universe. 
          Let the ancient wisdom illuminate your path forward.
        </HeroSubtitle>
        <ButtonGroup>
          <Button size="lg" onClick={onBookingClick}>
            <Calendar size={20} style={{ marginRight: theme.spacing[2] }} />
            Book Your Reading
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

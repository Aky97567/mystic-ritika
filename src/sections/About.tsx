import styled from '@emotion/styled';
import { theme } from '../theme';
import { Card } from '../components/Card';

const AboutContainer = styled.section`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
`;

const AboutContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing[8]};
  background: linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutCard = styled(Card)`
  padding: ${theme.spacing[8]};
`;

const AboutText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.primary[200]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[6]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>About Ritika</SectionTitle>
        <AboutCard>
          <AboutText>
            With over 15 years of experience in the mystical arts, I have dedicated my life to helping souls 
            find their true path. Trained in ancient traditions and blessed with natural intuitive abilities, 
            I offer guidance through life's most challenging moments.
          </AboutText>
          <AboutText>
            My journey began in the sacred temples of India, where I studied under renowned spiritual masters. 
            Today, I combine traditional wisdom with modern understanding to provide clarity, healing, and hope 
            to all who seek my guidance.
          </AboutText>
        </AboutCard>
      </AboutContent>
    </AboutContainer>
  );
};

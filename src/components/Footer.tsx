import styled from '@emotion/styled';
import { theme } from '../theme';

const FooterContainer = styled.footer`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};
  border-top: 1px solid rgba(147, 51, 234, 0.2);
`;

const FooterText = styled.p`
  color: ${theme.colors.primary[300]};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2025 Mystic Ritika. All rights reserved. • Illuminating paths since 2010.
      </FooterText>
    </FooterContainer>
  );
};

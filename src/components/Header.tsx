import styled from '@emotion/styled';
import { Moon } from 'lucide-react';
import { theme } from '../theme';
import { breakpoints } from '../theme/breakpoints';

const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[6]};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 96rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
`;

const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]});
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.secondary[400]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: none;
  gap: ${theme.spacing[8]};

  ${breakpoints.md} {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut};

  &:hover {
    color: ${theme.colors.primary[300]};
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoIcon>
            <Moon size={24} color={theme.colors.white} />
          </LogoIcon>
          <LogoText>Mystic Ritika</LogoText>
        </Logo>
        <NavLinks>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#courses">Courses</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#testimonials">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

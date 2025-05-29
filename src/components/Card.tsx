import styled from '@emotion/styled';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

const StyledCard = styled.div<{ hover?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[6]};
  border: 1px solid rgba(147, 51, 234, 0.2);
  transition: all ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut};

  ${({ hover }) => hover && `
    &:hover {
      border-color: rgba(147, 51, 234, 0.4);
      transform: scale(1.05);
    }
  `}
`;

export const Card = ({ hover = false, ...props }: CardProps) => {
  return <StyledCard hover={hover} {...props} />;
};

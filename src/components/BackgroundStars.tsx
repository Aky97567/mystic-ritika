import styled from '@emotion/styled';
import { theme } from '../theme';

const StarsContainer = styled.div`
  fixed: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Star = styled.div<{ 
  top: string; 
  left: string; 
  size: string; 
  opacity: string; 
  animationDelay: string;
  animationType: 'pulse' | 'ping';
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  opacity: ${({ opacity }) => opacity};
  animation-delay: ${({ animationDelay }) => animationDelay};
  
  ${({ animationType }) => animationType === 'pulse' ? `
    animation: pulse 2s infinite;
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
  ` : `
    animation: ping 3s infinite;
    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `}
`;

const stars = [
  { top: '20%', left: '10%', size: '0.5rem', opacity: '0.7', delay: '0s', type: 'pulse' as const },
  { top: '40%', left: '85%', size: '0.25rem', opacity: '0.6', delay: '1s', type: 'ping' as const },
  { top: '60%', left: '25%', size: '0.75rem', opacity: '0.5', delay: '2s', type: 'pulse' as const },
  { top: '15%', left: '60%', size: '0.5rem', opacity: '0.4', delay: '0.5s', type: 'ping' as const },
  { top: '80%', left: '70%', size: '0.25rem', opacity: '0.8', delay: '1.5s', type: 'pulse' as const },
  { top: '30%', left: '45%', size: '0.5rem', opacity: '0.3', delay: '2.5s', type: 'ping' as const },
];

export const BackgroundStars = () => {
  return (
    <StarsContainer>
      {stars.map((star, index) => (
        <Star
          key={index}
          top={star.top}
          left={star.left}
          size={star.size}
          opacity={star.opacity}
          animationDelay={star.delay}
          animationType={star.type}
        />
      ))}
    </StarsContainer>
  );
};

import styled from '@emotion/styled';
import { theme } from '../theme';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  name?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.sans.join(', ')};
  font-size: ${theme.typography.fontSize.base};
  transition: all ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut};

  &::placeholder {
    color: ${theme.colors.primary[300]};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
  }

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

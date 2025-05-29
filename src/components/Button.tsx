import styled from "@emotion/styled";
import { theme } from "../theme";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.duration.normal}
    ${theme.transitions.easing.easeInOut};
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: ${theme.typography.fontFamily.sans.join(", ")};

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case "lg":
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[8]};
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          font-size: ${theme.typography.fontSize.base};
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `
          background: linear-gradient(to right, ${theme.colors.secondary[600]}, ${theme.colors.secondary[500]});
          color: ${theme.colors.white};
          &:hover {
            background: linear-gradient(to right, ${theme.colors.secondary[700]}, ${theme.colors.secondary[600]});
            transform: scale(1.05);
          }
        `;
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.primary[300]};
          border: 2px solid ${theme.colors.primary[400]};
          &:hover {
            background: ${theme.colors.primary[400]};
            color: ${theme.colors.white};
          }
        `;
      default:
        return `
          background: linear-gradient(to right, ${theme.colors.primary[600]}, ${theme.colors.secondary[600]});
          color: ${theme.colors.white};
          &:hover {
            background: linear-gradient(to right, ${theme.colors.primary[700]}, ${theme.colors.secondary[700]});
            transform: scale(1.05);
          }
        `;
    }
  }}

  ${({ fullWidth }) => fullWidth && "width: 100%;"}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  `}

  &:active {
    transform: scale(0.98);
  }
`;

export const Button = ({
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) => {
  return <StyledButton variant={variant} size={size} type={type} {...props} />;
};

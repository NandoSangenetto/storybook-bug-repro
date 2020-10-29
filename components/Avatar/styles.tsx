import styled, { css } from 'styled-components';

interface AvatarWrapperProps {
  size: 'small' | 'medium' | 'big';
  type: 'normal' | 'alert' | 'image';
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  ${({ theme, size, type }) => css`
    width: ${theme.avatar[size].size}px;
    height: ${theme.avatar[size].size}px;
    font-size: ${theme.avatar[size].fontSize}px;
    background-color: ${type === 'alert' ? '#E26060' : '#273653'};
  `}

  &img {
    color: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
    text-indent: 10000px;
  }
`;

export default AvatarWrapper;

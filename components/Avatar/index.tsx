import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AvatarWrapper } from './styles';

export interface Props {
  type: 'normal' | 'alert' | 'image';
  alt?: string;
  src?: string;
  initials?: string;
  size: 'small' | 'medium' | 'big';
}

const Avatar: React.FC<Props> = ({
  initials,
  alt = '',
  src,
  type,
  size = 'small',
}) => {
  const theme = useContext(ThemeContext);
  if (type === 'image') {
    return (
      <AvatarWrapper size={size} type={type}>
        <img
          src={src}
          alt={alt}
          width={theme.avatar[size].size}
          height={theme.avatar[size].size}
        />
      </AvatarWrapper>
    );
  }
  return (
    <AvatarWrapper size={size} type={type}>
      {type === 'alert' ? '!' : initials}
    </AvatarWrapper>
  );
};

export default Avatar;

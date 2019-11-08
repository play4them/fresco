import React from 'react';

import { Box } from '../../box';
import { Text } from '../../typography';

function getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback;
  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
}

const getTextSizeForAvatarSize = size => {
  if (size <= 24) return 300;
  if (size <= 28) return 300;
  if (size <= 32) return 300;
  if (size <= 36) return 400;
  if (size <= 40) return 500;
  return 600;
};

const Avatar = ({ bg, borderRadius, color, image, name, size, ...rest }) => (
  <Box data-playground-id="avatar" title={name && name} width={size} {...rest}>
    <Box
      data-playground-id="avatar.setSize"
      position="relative"
      pb="100%"
      borderRadius={borderRadius}
      bg={bg}
      overflow="hidden"
    >
      {image && (
        <Box
          data-playground-id="avatar.image"
          as="img"
          src={image}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          css={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}
      {!image && name && (
        <Text
          data-playground-id="avatar.initials"
          children={getInitials(name)}
          size={getTextSizeForAvatarSize(size)}
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          color={color}
          css={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </Box>
  </Box>
);

Avatar.defaultProps = {
  bg: 'gray.4',
  borderRadius: '50%',
  color: 'gray.8',
  size: 40,
};

export default Avatar;

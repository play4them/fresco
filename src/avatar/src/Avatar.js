import React from "react";

import { BlurHash } from "../../blurHash";
import { Box } from "../../box";
import { Text } from "../../typography";

function getInitials(name, fallback = "?") {
  if (!name || typeof name !== "string") return fallback;
  return name
    .replace(/\s+/, " ")
    .split(" ") // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join("");
}

const getTextSizeForAvatarSize = (size) => {
  if (size <= 24) return 300;
  if (size <= 28) return 300;
  if (size <= 32) return 300;
  if (size <= 36) return 400;
  if (size <= 40) return 500;
  return 600;
};

function Avatar({
  bg,
  borderRadius,
  color,
  image,
  blurHash,
  fadeIn,
  name,
  size,
  ...rest
}) {
  const [opacity, setOpacity] = useState(!blurHash || !fadeIn ? 1 : 0);
  return (
    <Box data-fresco-id="avatar" title={name && name} width={size} {...rest}>
      <Box
        data-fresco-id="avatar.setSize"
        position="relative"
        pb="100%"
        borderRadius={borderRadius}
        bg={bg}
        overflow="hidden"
      >
        {blurHash && (
          <BlurHash
            hash={blurHash}
            style={{ opacity: opacity === 1 ? 0 : 1 }}
            css={css({
              transition: "opacity 300ms ease-in",
            })}
          />
        )}
        {image && (
          <Box
            data-fresco-id="avatar.image"
            as="img"
            src={image}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            css={{
              opacity: 0,
              objectFit: "cover",
              objectPosition: "center",
              transition: "opacity 300ms ease-in",
            }}
            onLoad={() => {
              setOpacity(1);
            }}
            style={{ opacity }}
          />
        )}
        {!image && name && (
          <Text
            data-fresco-id="avatar.initials"
            children={getInitials(name)}
            size={getTextSizeForAvatarSize(size)}
            position="absolute"
            top="50%"
            left="50%"
            textAlign="center"
            color={color}
            css={{
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </Box>
    </Box>
  );
}

Avatar.defaultProps = {
  bg: "gray.4",
  borderRadius: "50%",
  color: "gray.8",
  fadeIn: true,
  size: 40,
};

export default Avatar;

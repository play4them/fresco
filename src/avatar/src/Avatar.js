import React, { useState } from "react";
import css from "@styled-system/css";
import { useTheme } from "emotion-theming";
import { rgba } from "polished";

import { Box } from "../../box";
import { BlurHash } from "../../blurHash";

function getInitials(name, fallback = "?") {
  if (!name || typeof name !== "string") return fallback;
  return name
    .replace(/\s+/, " ")
    .split(" ") // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join("");
}

function Avatar({
  size,
  blurHash,
  image,
  name,
  borderRadius = "round",
  color = "label.1",
  bg = "gray.4",
  ...rest
}) {
  const [opacity, setOpacity] = useState(0);
  const THEME = useTheme();

  return (
    <Box
      data-fresco-id="avatar"
      aria-label={name}
      width={size + "px"}
      borderRadius={borderRadius}
      overflow="hidden"
      {...rest}
    >
      <Box position="relative" pb="100%" bg={bg}>
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
            as="img"
            src={image}
            data-fresco-id="avatar.image"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            css={css({
              opacity: 0,
              objectFit: "cover",
              transition: "opacity 300ms ease-in",
              "&::after": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: borderRadius,
                boxShadow: `inset 0 0 2px 0 ${rgba(
                  THEME.colors.label[0],
                  0.25
                )}`,
              },
            })}
            onLoad={() => {
              setOpacity(1);
            }}
            style={{ opacity }}
          />
        )}
        {!image && !blurHash && name && (
          <Box
            data-fresco-id="avatar.initials"
            children={getInitials(name)}
            as="span"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            fontSize={Math.round(size / 2.5) + "px"}
            fontWeight={600}
            lineHeight={size + "px"}
            textAlign="center"
            color={color}
            css={{ userSelect: "none", pointerEvents: "none" }}
          />
        )}
        {/* Shadow Ring */}
        {image && (
          <Box
            data-fresco-id="avatar.ring"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            css={css({
              "&::after": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: borderRadius,
                boxShadow: `inset 0 0 2px 0 ${rgba(
                  THEME.colors.label[0],
                  0.25
                )}`,
              },
            })}
          />
        )}
      </Box>
    </Box>
  );
}

export default Avatar;

import React from "react";
import { useTheme } from "emotion-theming";
import css from "@styled-system/css";

import { Avatar } from "../../avatar";
import { Box } from "../../box";
import { Flex } from "../../flex";
import { Icon } from "../../icon";

function AvatarGroup({ avatars = [], size, max = 3, overlap = 16, border }) {
  const THEME = useTheme();

  function containerWidth() {
    if (avatars.length < max)
      return avatars.length * size - (avatars.length - 1) * overlap + "px";
    if (avatars.length === max) return max * size - (max - 1) * overlap + "px";
    if (avatars.length > max) return (max + 1) * size - max * overlap + "px";
  }

  if (avatars.length > 0)
    return (
      <Box
        data-fresco-id="avatarGroup"
        position="relative"
        zIndex={0}
        width={containerWidth()}
        height={size + "px"}
        css={css({
          "> *:not(:last-of-type)": {
            boxShadow: border
              ? border
              : `0 0 0 2px ${THEME.colors.background[0]}`,
          },
        })}
      >
        {avatars.slice(0, max).map(({ ...avatar }, i) => {
          return (
            <Box
              data-fresco-id="avatarGroup.item"
              position="absolute"
              top={0}
              left={i * (size - overlap)}
              zIndex={max - i}
              width={size}
              height={size}
              borderRadius="round"
              key={"avatar" + i}
            >
              <Avatar size={size} {...avatar} />
            </Box>
          );
        })}
        {avatars.length > max && (
          <Box
            data-fresco-id="avatarGroup.more"
            position="absolute"
            top={0}
            right={0}
            width={size}
            height={size}
            borderRadius="round"
          >
            <Avatar
              size={size}
              blurHash={avatars[max + 1] && avatars[max + 1].blurHash}
              image={avatars[max + 1] && avatars[max + 1].image}
            />
            <Flex
              position="absolute"
              top={0}
              right={0}
              width={size}
              height={size}
              borderRadius="round"
              bg="fill.3"
            >
              <Icon symbol="more-fill" size={16} m="auto" color="label.1" />
            </Flex>
          </Box>
        )}
      </Box>
    );
  else return null;
}

export default AvatarGroup;

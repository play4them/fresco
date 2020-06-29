import React, { useRef, useEffect } from "react";
import { decode } from "blurhash";

function BlurHash({ hash, aspectRatio, ...rest }) {
  const blurRef = useRef(null);

  useEffect(() => {
    if (hash && blurRef) {
      const pixels = decode(hash, 32, 32);
      const ctx = blurRef.current.getContext("2d");
      const imageData = ctx.createImageData(32, 32);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  }, [blurRef]);

  if (hash) {
    return (
      <>
        <canvas
          ref={blurRef}
          width={32}
          height={32}
          css={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: aspectRatio >= 1 ? "100%" : 100 * aspectRatio + "%",
            height: aspectRatio >= 1 ? 100 / aspectRatio + "%" : "100%",
            transform: "translate(-50%, -50%)",
          }}
          {...rest}
        />
      </>
    );
  } else {
    return null;
  }
}

export default BlurHash;

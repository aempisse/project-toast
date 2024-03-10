import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.code === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", keyPressHandler);

    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  });
};

export default useEscapeKey;

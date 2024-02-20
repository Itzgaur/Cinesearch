import { useEffect } from "react";
import { act } from "react-dom/test-utils";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        document.addEventListener("keydown", function (e) {
          if (e.code.toLowerCase() === key.toLowerCase()) action();
        });
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}

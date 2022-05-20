import { useState } from "react";

const useClipboard = () => {
  const [copiedText, setCopiedText] = useState("");
  const [copyIconState, setCopyIcon] = useState(false);
  if (navigator) {
    navigator.clipboard
      .readText()
      .then((clipboard) => {
        setCopiedText(clipboard);
      })
      .catch((error) => console.log(error))
      .finally(() => setCopyIcon(true));
  }

  return [copiedText, copyIconState];
};
export default useClipboard;

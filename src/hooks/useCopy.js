import { useEffect, useState } from "react";

// copy(text) puts text on the clipboard; `copied` is true for 2 seconds after.
export function useCopy() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard blocked: the mailto link still works
    }
  }

  return { copied, copy };
}

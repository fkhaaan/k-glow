import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onClose, 2600);
    return () => window.clearTimeout(timeout);
  }, [onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-[8px] border border-[var(--color-line)] bg-[var(--color-ink)] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(31,27,24,0.24)] sm:bottom-7 sm:right-7 sm:left-auto sm:w-auto sm:translate-x-0">
      {message}
    </div>
  );
}

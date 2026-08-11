"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";
import { CloseIcon } from "../icons/Icons";

type ModalProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const Modal = ({ title, message, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(true);
  const portalTarget = useRef<HTMLElement | null>(null);
  if (!mounted) return null;

  useEffect(() => {
    setMounted(true);
    portalTarget.current = document.body;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="bg-text-secondary fixed inset-0 z-50 flex items-center justify-center">
      <dialog
        className="flex w-85.75 flex-col gap-8 rounded-lg bg-white p-6 shadow-sm"
        style={{ margin: "auto" }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <h2
              id="modal-title"
              className="text-lg font-semibold text-neutral-900"
            >
              {title}
            </h2>

            <Button
              size="sm"
              variant="linkGray"
              iconOnly
              iconSize="sm"
              icon={CloseIcon}
              className="ml-4 h-4 w-4"
              onClick={onClose}
              aria-label="Close modal"
            />
          </div>

          <p
            id="modal-description"
            className="text-sm font-normal text-neutral-600"
          >
            {message}
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            size="md"
            variant="secondary"
            text="No"
            className="w-full justify-center"
            onClick={onClose}
            aria-label="No, I want to stay in the process"
          />
          <Button
            size="md"
            variant="primary"
            text="Yes"
            className="w-full justify-center"
            onClick={onClose}
            aria-label="Yes, I want to leave the process"
          />
        </div>
      </dialog>
    </div>,
    document.body,
  );
};
export default Modal;

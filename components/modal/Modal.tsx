import { createPortal } from "react-dom";
import Button from "../button/Button";
import { CloseIcon } from "../icons/Icons";

type ModalProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const Modal = ({ title, message, onClose }: ModalProps) => {
  return createPortal(
    <div className="bg-text-secondary fixed inset-0 z-50 flex items-center justify-center">
      <article className="flex w-85.75 flex-col gap-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <span className="text-lg font-semibold text-neutral-900">
              {title}
            </span>

            <Button
              href="#"
              size="sm"
              variant="linkGray"
              iconOnly
              iconSize="sm"
              icon={CloseIcon}
              className="ml-4 h-4 w-4"
              onClick={onClose}
            />
          </div>

          <span className="text-sm font-normal text-neutral-600">
            {message}
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            href="#"
            size="md"
            variant="secondary"
            text="No"
            className="w-full justify-center"
            onClick={onClose}
          />
          <Button
            href="#"
            size="md"
            variant="primary"
            text="Yes"
            className="w-full justify-center"
            onClick={onClose}
          />
        </div>
      </article>
    </div>,
    document.body,
  );
};
export default Modal;

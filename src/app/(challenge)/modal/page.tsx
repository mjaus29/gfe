"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const ModalPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="container-layout bg-layout-plain">
      {open && (
        <div className="m-auto h-full">
          <Modal
            title={"Are you sure you want to leave the process?"}
            message={`Your upgrade plan process will be cancelled. You need to start again if you leave the process.`}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
export default ModalPage;

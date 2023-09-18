"use client";
import { useEffect, useState } from "react";

export default function Lightbox(props: any) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only toggle the 'open' state when 'props.lightbox' changes
    if (props.lightbox !== open) {
      setOpen(props.lightbox);
    }
  }, [props.lightbox, open]);

  return (
    <dialog
      open={open}
      className={
        open
          ? "min-h-screen w-[100%] absolute  top-0 left-0 z-20 flex justify-center items-center bg-modal-overlay"
          : undefined
      }
    >
      <div className="flex flex-col items-center relative">
        <img
          className="max-w-[70%]"
          src={props.productImg}
          alt={props.productImg}
        />
      </div>
    </dialog>
  );
}

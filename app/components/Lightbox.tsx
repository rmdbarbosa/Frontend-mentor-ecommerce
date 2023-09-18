"use client";
import { useState } from "react";

export default function Lightbox() {
  const [open, setOpen] = useState(true);
  return (
    <dialog open={open} className="min-h-screen bg-modal-overlay">
      Testing, attention please
    </dialog>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import FormModal from "./FormModal";

export default function NavbarWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

'use client'
import usePostLoad from "@/hooks/usePostLoad";
import { ForwardRefRenderFunction, PropsWithChildren, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface ModalHandlingImperative {
  showModal: () => void,
  close: () => void
}

const Modal: ForwardRefRenderFunction<ModalHandlingImperative, PropsWithChildren> = ({ children }, ref) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    showModal: () => { modalRef.current?.showModal() },
    close: () => { modalRef.current?.close() }
  }))

  const modalElement = usePostLoad<Element | null>(() => document.getElementById('modal-root')).getResult();
  
  return (
      modalElement && createPortal(<dialog ref={modalRef}>
        {children}
      </dialog>, modalElement)
  )
}

export default forwardRef(Modal)

'use client'

import { joinClasses } from "@/utils/utils";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";

export default function DeleteModal ({
  onDelete,
  onClose,
  className,
  ...props
}) {
  const defaultClasses = 'w-70 max-sm:w-45 h-35 bg-white';

  return (
    <Modal 
      className={defaultClasses}
      onClose={onClose}
    >
      <span className="text-center pt-4 inline-block">Tem certeza que deseja excluir este curso?</span>
      <Button 
        label='Excluir'
        className='bg-red-500 text-white block ml-auto mr-auto mt-4'
        onClick={onDelete}
      />
    </Modal>
  )
}
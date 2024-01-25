'use client'
import AdminPageTemplate from "@/components/AdminPageTemplate"
import InputWrapper from "./_components/InputWrapper"
import Button from "@/components/Button"
import SelectionInput from "@/components/SelectionInput"
import ImageInput from "./_components/ImageInput"
import { CATEGORIES, BACKGROUND_COLORS, TEXT_COLORS} from "@/utils/constants"
import TextbaseInput from "@/components/TextbaseInput"
import useForm from "@/hooks/useForm"
import { motion } from "framer-motion"
import useFetchFromServer from "@/hooks/useFetchFromServer"
import { createProductFn } from "@/api/ProductsFlavor"
import { useEffect, useRef, useState } from "react"
import Modal, { ModalHandlingImperative } from "@/components/Modal"
import ErrorModalBody from "./_components/ErrorModalBody"
import SuccessModalBody from "./_components/SuccessModalBody"
import { uploadImageFn } from "@/api/UploadImage"

const NewProductPage: React.FC = () => {
  const {refsRecord, resetForm, getValues} = useForm([
    'name',
    'description',
    'image',
    'bg_color',
    'text_color',
    'category',
    'price'
  ])
  const { fetchDataFn, fetchState, responseData, error, resetState } = useFetchFromServer()
  const dialogRef = useRef<ModalHandlingImperative>(null);
  const [step, setStep] = useState<'create object' | 'upload image' | undefined>()
  
  const {name, description, image, bg_color, text_color, category, price} = refsRecord

  useEffect(() => {
    (async () => {
      switch (fetchState) {
        case "error":
          dialogRef.current!.showModal()
          break;
        case "resolved":
          if (step === 'upload image') {
            dialogRef.current!.showModal()
            resetForm();
          } else {
            const data = responseData && await responseData.json()
            if (!data) return
            const presigned_url = data.data.image_presigned_url
            fetchDataFn(uploadImageFn(image.current!.getValue(), presigned_url))
            setStep('upload image')
          }
          break;
      }
    })()
  }, [fetchState, fetchDataFn, image, resetForm, responseData, step])
  
  const handleSubmit = async () => {
    const payload = getValues();
    setStep('create object')
    fetchDataFn(createProductFn(payload, category.current!.getValue()));
  }

  const handleCloseModal = () => {
    dialogRef.current!.close()
    setStep(undefined);
    resetState()
  }

  return (
    <>
      <Modal ref={dialogRef}>
        {fetchState === 'error' && <ErrorModalBody title={error?.message} error={Array.isArray(error?.errors) ? error?.errors[0] : error?.errors} handleClose={handleCloseModal}/>}
        {fetchState === 'resolved' && <SuccessModalBody handleClose={handleCloseModal}/>}
      </Modal>
      <AdminPageTemplate title="Create product" width="725px">
        <div className="bg-white p-4 flex flex-col gap-6 relative">
          <InputWrapper title="Product name">
            <TextbaseInput ref={name} type='textarea' placeholder="Product name" rows={2}/>
          </InputWrapper>
          <InputWrapper title="Description">
            <TextbaseInput ref={description} type='textarea' placeholder='Description' rows={3}/>
          </InputWrapper>
          <InputWrapper title="Images">
            <ImageInput ref={image}/>
          </InputWrapper>
          <InputWrapper title="Category">
            <SelectionInput options={CATEGORIES} ref={category}/>
          </InputWrapper>
          <div className="flex gap-5">
            <div className="w-1/2">
              <InputWrapper title="Background color">
                <SelectionInput options={BACKGROUND_COLORS} ref={bg_color}/>
              </InputWrapper>
            </div>
            <div className="w-1/2">
              <InputWrapper title="Text color">
                <SelectionInput options={TEXT_COLORS} ref={text_color}/>
              </InputWrapper>
            </div>
          </div>
          <InputWrapper title = "Price">
            <div className="flex gap-4">
              <TextbaseInput type="number" className="w-1/2" ref={price}/>
              <div>USD</div>
            </div>
          </InputWrapper>
          <InputWrapper>
            <div className="flex gap-5">
              <Button className="bg-blue-500 py-2 w-28 text-center rounded-md text-white" onClick={handleSubmit}>
                Submit item
              </Button>
              <Button className="bg-gray-300 py-2 w-28 text-center rounded-md text-black" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </InputWrapper>
          {fetchState==='loading' && 
          <div className="absolute -m-4 w-full h-full bg-black bg-opacity-25 flex">
            <motion.div 
              className="w-20 h-20 rounded-full border-slate-700 border-8 border-t-white m-auto opacity-75"
              animate={{ rotate: 360 }}
              transition={{repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
          </div>
          }
        </div>
      </AdminPageTemplate>
    </>
  )
}

export default NewProductPage

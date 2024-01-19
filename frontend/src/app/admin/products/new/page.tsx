'use client'
import AdminPageTemplate from "@/components/AdminPageTemplate"
import InputWrapper from "./_components/InputWrapper"
import { useRef } from "react"
import Button from "@/components/Button"
import SelectionInput, { SelectionInputHandlingRef } from "@/components/SelectionInput"
import ImageInput, { ImageUploadRef } from "./_components/ImageInput"
import { CATEGORIES, BACKGROUND_COLORS, TEXT_COLORS} from "@/utils/constants"
import TextbaseInput, { TextbaseInputHandlingRef } from "@/components/TextbaseInput"

const NewProductPage: React.FC = () => {
  type SelectionInputType = SelectionInputHandlingRef;
  type ImageInputType = ImageUploadRef;

  const productNameRef = useRef<TextbaseInputHandlingRef>(null);
  const descriptionRef = useRef<TextbaseInputHandlingRef>(null);
  const imageRef = useRef<ImageInputType>(null);
  const bgColorRef = useRef<SelectionInputType>(null);
  const textColorRef = useRef<SelectionInputType>(null);
  const categoryRef = useRef<SelectionInputType>(null);
  const priceRef = useRef<TextbaseInputHandlingRef>(null);

  const handleSubmit = () => {
    console.log(productNameRef?.current?.getValue())
    console.log(descriptionRef?.current?.getValue())
    console.log(imageRef?.current?.getValue())
    console.log(bgColorRef?.current?.getValue())
    console.log(categoryRef?.current?.getValue())
    console.log(textColorRef?.current?.getValue())
    console.log(priceRef.current!.getValue())
  }

  const handleCancel = () => {
    productNameRef?.current?.reset()
    descriptionRef?.current?.reset()
    imageRef?.current?.reset()
    bgColorRef?.current?.reset()
    categoryRef?.current?.reset()
    textColorRef?.current?.reset()
    priceRef?.current?.reset()
  }

  return (
    <AdminPageTemplate title="Create product" width="725px">
      <div className="bg-white p-4 flex flex-col gap-6">
        <InputWrapper title="Product name">
          <TextbaseInput ref={productNameRef} type='text' placeholder="Product name"/>
        </InputWrapper>
        <InputWrapper title="Description">
          <TextbaseInput ref={descriptionRef} type='textarea' placeholder='Description' rows={3}/>
        </InputWrapper>
        <InputWrapper title="Images">
          <ImageInput ref={imageRef}/>
        </InputWrapper>
        <InputWrapper title="Category">
          <SelectionInput options={CATEGORIES} ref={categoryRef}/>
        </InputWrapper>
        <div className="flex gap-5">
          <div className="w-1/2">
            <InputWrapper title="Background color">
              <SelectionInput options={BACKGROUND_COLORS} ref={bgColorRef}/>
            </InputWrapper>
          </div>
          <div className="w-1/2">
            <InputWrapper title="Text color">
              <SelectionInput options={TEXT_COLORS} ref={textColorRef}/>
            </InputWrapper>
          </div>
        </div>
        <InputWrapper title = "Price">
          <div className="flex gap-4">
            <TextbaseInput type="number" className="w-1/2" ref={priceRef}/>
            <div>USD</div>
          </div>
        </InputWrapper>
        <InputWrapper>
          <div className="flex gap-5">
            <Button className="bg-blue-500 py-2 w-28 text-center rounded-md text-white" onClick={handleSubmit}>
              Submit item
            </Button>
            <Button className="bg-gray-300 py-2 w-28 text-center rounded-md text-black" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </InputWrapper>
      </div>
    </AdminPageTemplate>
  )
}

export default NewProductPage

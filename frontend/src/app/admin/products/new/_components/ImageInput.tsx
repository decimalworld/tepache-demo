import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ChangeEvent, ForwardRefRenderFunction, Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";

const UPLOAD_IMAGE = "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/upload-svgrepo-com.svg"

export interface ImageUploadRef {
  getValue: () => any,
  reset: () => void,
}

const ImageInput: ForwardRefRenderFunction<ImageUploadRef> = ({}, ref) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [currentImage, setCurrentImage] = useState<StaticImport | string>();

  useImperativeHandle(ref, () => ({
    getValue() {
      return currentImage;
    },
    reset() {setCurrentImage('')}
  }))

  const handleImageClick = () => {
    imageRef.current!.click()
  }
  const handleChangeCapture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files == null) return;
    if (e.currentTarget.files[0] == null) return;
    setCurrentImage(URL.createObjectURL(e.currentTarget.files[0]))
  }

  return (
    <div className="mx-auto h-64 w-52 relative border-2 border-slate-100">
      {currentImage &&  <Image fill src={currentImage} alt='product image'/>}
      {!currentImage &&  <Image src={UPLOAD_IMAGE} alt='product image' className="opacity-40" fill/>}
      <div className="absolute h-64 w-52 bg-black opacity-0 hover:opacity-10 hover:cursor-pointer" onClick={handleImageClick}></div>
      <input type='file' hidden ref={imageRef} onChangeCapture={handleChangeCapture}/>
    </div>
  )
};

export default forwardRef(ImageInput);

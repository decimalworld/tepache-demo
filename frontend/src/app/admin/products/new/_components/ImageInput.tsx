import useInputElement from "@/hooks/useInputElement";
import { InputHandlingImperative } from "@/utils/models";
import Image from "next/image";
import { ChangeEvent, ForwardRefRenderFunction, forwardRef, useRef} from "react";

const UPLOAD_IMAGE = "https://tepache-mock-1.s3.ap-southeast-1.amazonaws.com/development/general/upload-svgrepo-com.svg"

const ImageInput: ForwardRefRenderFunction<InputHandlingImperative> = ({}, ref) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const { data, setData, updateOnChangeFn } = useInputElement(ref, null);

  const handleImageClick = () => {
    imageRef.current!.click()
  }
  const handleChangeCapture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files == null) return;
    if (e.currentTarget.files[0] == null) return;
    setData(URL.createObjectURL(e.currentTarget.files[0]))
  }

  return (
    <div className="mx-auto h-64 w-52 relative border-2 border-slate-100">
      {data &&  <Image fill src={data} alt='product image'/>}
      {!data &&  <Image src={UPLOAD_IMAGE} alt='product image' className="opacity-40" fill/>}
      <div className="absolute h-64 w-52 bg-black opacity-0 hover:opacity-10 hover:cursor-pointer" onClick={handleImageClick}></div>
      <input type='file' hidden ref={imageRef} onChangeCapture={handleChangeCapture}/>
    </div>
  )
};

export default forwardRef(ImageInput);

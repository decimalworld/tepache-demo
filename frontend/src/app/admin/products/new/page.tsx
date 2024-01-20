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

const NewProductPage: React.FC = () => {
  const {refsRecord, resetForm, getValues} = useForm([
    'productNameRef',
    'descriptionRef',
    'imageRef',
    'bgColorRef',
    'textColorRef',
    'categoryRef',
    'priceRef'
  ])
  
  const {productNameRef, descriptionRef, imageRef, bgColorRef, textColorRef, categoryRef, priceRef} = refsRecord

  const { fetchDataFn, fetchState, data, error } = useFetchFromServer()

  const handleSubmit = async () => {
    fetchDataFn('http://localhost:3000/products/flavors', { method: 'POST' });
  }

  return (
    <AdminPageTemplate title="Create product" width="725px">
      <div className="bg-white p-4 flex flex-col gap-6 relative">
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
  )
}

export default NewProductPage

import Button from "@/components/Button"

interface ErrorInfo {
  title: string,
  error: string,
  handleClose: () => void
}

const ErrorModalBody: React.FC<ErrorInfo> = ({title, error, handleClose}) => {
  return (
    <div className="h-fit w-[525px] px-4">
      <div className="h-16 w-full flex space-between border-b-2 border-slate-300">
        <span className="my-auto text-xl flex-grow font-semibold text-red-600">
          {title}
        </span>
        <div className="h-6 w-6 my-auto hover:cursor-pointer flex" onClick={handleClose}>
          <div className="m-auto h-4 w-4 bg-slate-700 cross-shape"/>
        </div>
      </div>
      <div className="h-28 w-full flex gap-5 border-b-2 border-slate-300">
        <div className="bg-red-300 rounded-full my-auto h-12 w-12 flex">
          <div className="bg-red-600 rounded-full m-auto h-8 w-8 flex">
            <div className="bg-white cross-shape m-auto h-4 w-4"/>
          </div>
        </div>
        <span className="my-auto text-wrap text-lg text-slate-700">
          {error}
        </span>
      </div>
      <div className="h-20 w-full flex">
        <Button 
          className="m-auto h-10 w-52 bg-red-600 flex rounded-lg"
          onClick={handleClose}
          >
          <span className="text-white text-xl m-auto font-bold">
            OK
          </span>
        </Button>
      </div>
    </div>
  )
}

export default ErrorModalBody

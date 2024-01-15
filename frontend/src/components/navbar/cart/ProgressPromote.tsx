import ProgressBar from "./ProgressBar";
import { USER_ORDER } from "@/utils/database";

const ProgressPromote: React.FC = () => {
  const spentAmount = USER_ORDER.entries.reduce((total, entry) => total + entry.quantity * 15.99, 0);
  const promoteAmmout = 100;
  return (
    <div className="mx-4 flex flex-col border-b-2 border-orange-100">
      <div className="-mt-4 mb-8 uppercase text-5xl -rotate-2 font-extrabold text-orange-100">Your cart</div>
      <ProgressBar progress={spentAmount / promoteAmmout}/>
      <div className="mx-auto mt-4 mb-10 w-3/5 text-center font-bold uppercase text-orange-100">
        Spend ${promoteAmmout - spentAmount} more to receive free de la calle cap!
      </div>
    </div>
  )
};

export default ProgressPromote;

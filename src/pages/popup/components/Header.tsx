import { useRecoilState } from "recoil";
import { showFormAtom } from "../recoil/atom/showFormAtom";
import { GoPlus } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";

const Header = () => {
  const [showForm, setShowForm] = useRecoilState(showFormAtom);
  return (
    <div className="px-2 h-10 sticky top-0 left-0 right-0 text-xl w-full bg-[#4f06c4] text-white flex justify-between items-center">
      <p>Mink here 👋</p>
      {showForm ? (
        <TiArrowSortedUp
          className="text-white hover:cursor-pointer"
          onClick={() => setShowForm(false)}
        />
      ) : (
        <GoPlus
          className="text-white hover:cursor-pointer"
          onClick={() => setShowForm(true)}
        />
      )}
    </div>
  );
};

export default Header;

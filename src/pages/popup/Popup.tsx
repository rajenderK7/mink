import Header from "./components/Header";
import Links from "./components/Links";
import NewLinkForm from "./components/NewLinkForm";
import { useRecoilValue } from "recoil";
import { showFormAtom } from "./recoil/atom/showFormAtom";

export default function Popup(): JSX.Element {
  const showForm = useRecoilValue(showFormAtom);

  return (
    <div className="max-h-[200px]">
      <Header />
      <main className="m-2">
        {showForm && <NewLinkForm />}
        <Links />
      </main>
    </div>
  );
}

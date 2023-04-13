import { useState } from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import NewLink from "./components/NewLink";

export default function Popup(): JSX.Element {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-h-[200px]">
      <Header />
      <main className="m-2">
        {/* Form for adding new link */}
        {showForm && <NewLink />}
        <Links />
      </main>
    </div>
  );
}

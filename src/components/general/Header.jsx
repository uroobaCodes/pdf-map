import { Button } from "../ui/button";
import DarkModeToggle from "../general/DarkModeToggle";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-gray-900 text-white flex h-20 w-full items-center justify-between px-6">
      <Link to="/">
        {" "}
        <h1 className="text-2xl font-bold">PDF Manager</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>
        {/* <Button asChild className="hidden sm:block">
          <Link to="/signup">Sign Up</Link>
        </Button> */}
        <DarkModeToggle />
      </div>
    </header>
  );
}

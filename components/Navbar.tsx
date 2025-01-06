import { FaShoppingBag } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoIosAdd } from "react-icons/io";
// import { CiLight } from "react-icons/ci";
import { ModeToggle } from "@/app/ModeToggle";

const Navbar = () => {
  return (
    <div
      className={`relative w-full h-20 overflow-hidden flex justify-between items-center px-6 border-b`}
    >
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-10 bg-primary rounded-md flex justify-center items-center">
          <FaShoppingBag className="text-white text-lg" aria-hidden="true" />
        </div>

        <h1 className="font-semibold text-2xl max-md:hidden">
          Sales <span className="font-normal text-primary">Flow</span>
        </h1>
      </header>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3 max-sm:w-[250px] relative">
          <Input placeholder="Search..." className="h-10 rounded-lg" />
          <div className="absolute right-[4px] h-[31px]">
            <Button className="h-8">
              <IoIosAdd className="text-3xl text-white" />
            </Button>
          </div>
        </div>

        {/* <CiLight /> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
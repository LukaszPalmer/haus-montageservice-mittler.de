import { FiSearch } from "react-icons/fi";

function HeaderSearch() {
    return (
        <div className="relative hidden lg:block group">
            <div className="flex items-center border-b border-[#083224]/10 bg-transparent px-3 py-2 transition-all duration-300 focus-within:border-[#2AA34D] focus-within:bg-[#F8FCF9]">
                <FiSearch className="text-[#083224]/40 transition-colors group-focus-within:text-[#2AA34D]" size={18} />
                <input
                    type="text"
                    placeholder="Suchen..."
                    className="ml-3 w-[150px] bg-transparent font-sans text-sm text-[#083224] outline-none placeholder:text-slate-400 focus:w-[220px] transition-all duration-500 xl:text-base xl:focus:w-[280px]"
                />
            </div>
            
        </div>
    );
}

export default HeaderSearch;
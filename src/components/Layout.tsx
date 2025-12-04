import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="transition-colors duration-300">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
// dark:bg-[#11001F] dark:text-white

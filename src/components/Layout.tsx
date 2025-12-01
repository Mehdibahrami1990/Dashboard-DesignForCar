import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-[#11001F] dark:text-white transition-colors duration-300">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-7xl flex-1 mt-16 bg-gray-100 justify-center items-center mx-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;

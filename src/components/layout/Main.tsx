import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="mx-auto max-w-[1920px] overflow-hidden"> {children}</main>
  );
};

export default Main;

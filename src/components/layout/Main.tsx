import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="mx-auto max-w-[1920px]"> {children}</main>;
};

export default Main;

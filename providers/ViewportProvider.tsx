import { createContext, useEffect, useState } from "react";

interface ViewportContextInterface {
  isMobile: boolean;
}

export const ViewportContext = createContext<ViewportContextInterface>({
  isMobile: false,
});

export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (width < 769 && !isMobile) {
      setIsMobile(true);
    }
    if (width >= 769 && isMobile) {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

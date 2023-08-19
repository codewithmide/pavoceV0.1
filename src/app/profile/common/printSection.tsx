'use client'
import React, { forwardRef, ReactNode } from "react";

interface PrintSectionProps {
  children: ReactNode;
}

// eslint-disable-next-line react/display-name
const PrintSection = forwardRef<HTMLDivElement, PrintSectionProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="w-full border-[#dbd7d7] border center flex-col">
        {children}
      </div>
    );
  }
);

export default PrintSection;


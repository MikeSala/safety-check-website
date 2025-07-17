import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type PDFViewerProps = {
  pdf: string;
};

const PDFViewer: React.FC<PDFViewerProps> = (props) => {
  const { pdf } = props;
  const [numPages, setNumPages] = useState(0);

  return (
    <Document
      file={`data:application/pdf;base64,${pdf}`}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      className="!h-auto"
    >
      {/* it seems it's not supported so for a time being ignore warning */}
      {/* eslint-disable-next-line prefer-spread */}
      {Array.apply(null, Array(numPages))
        .map((x, i) => i + 1)
        .map((page) => (
          <>
            <Page
              key={page}
              pageNumber={page}
              scale={5}
              renderTextLayer={false}
              className="shadow- !h-auto w-full !min-w-0 rounded-md border-2 border-neutral-200"
            />
            <div className={"my-2"} />
          </>
        ))}
    </Document>
  );
};

export default PDFViewer;

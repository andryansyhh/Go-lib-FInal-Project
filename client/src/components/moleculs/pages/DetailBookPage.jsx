import React, { useState } from 'react';
// import Loader from '../pages/pdfControl/Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from '../pages/pdfControl/ControlPanel';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const DetailBookPage = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // setIsLoading(true);
  }

  return (
    <div>
      {/* <Loader isLoading={isLoading} /> */}
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file="./mining.pdf" 
        />
        <Document
          file="./mining.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default DetailBookPage;
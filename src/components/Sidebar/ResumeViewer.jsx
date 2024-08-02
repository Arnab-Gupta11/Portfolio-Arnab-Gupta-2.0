import { Document, Page } from "react-pdf";
import resume from "/Resume Of Arnab Gupta.pdf";
const ResumeViewer = () => {
  return (
    <div className="p-5">
      <Document className="w-full !rounded-2xl !overflow-clip !min-w-40 !min-h-14" file={resume}>
        <Page
          className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {/* <Document className="!rounded-2xl !w-[360px] md:!w-full" file={resume}>
        <Page
          className="w-[360px] md:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document> */}
    </div>
  );
};

export default ResumeViewer;

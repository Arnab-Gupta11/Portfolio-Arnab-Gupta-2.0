import { Document, Page } from "react-pdf";
import resume from "/Resume Of Arnab Gupta.pdf";
import { ImDownload } from "react-icons/im";
const ResumeViewer = () => {
  return (
    <div className="p-5 ">
      <div className="flex items-center gap-3 justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#c07ecd] font-lora text-base xsm:text-lg sm:text-xl md:text-2xl font-bold">Resume</h1>
        <a href={resume} download="Resume Of Arnab Gupta" className="tooltip hover:tooltip-open tooltip-right before:bg-[#26134d] before:ml-1  before:text-xs before:text-[#f0f2f5b3] before:rounded-md before:font-medium" data-tip="Download">
          <ImDownload className="text-secondary-100 animate-bounce cursor-pointer" size={22} />
        </a>
      </div>
      <div className="divider mt-1" />
      <Document className="w-full !rounded-2xl !overflow-clip !min-w-40 !min-h-14" file={resume}>
        <Page
          className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default ResumeViewer;

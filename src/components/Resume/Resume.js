import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/My Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
const onlinepdf =
  "https://drive.google.com/file/d/1fZKuhMmLiw5NjVij50DjIibKF8dn2bW1/view?usp=sharing";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, SetWidth] = useState(1200);
  useEffect(() => {
    SetWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container fluid className="resume-center"></Container>
      <Row className="justify-content-center mt-5 mb-5">
        <a href={onlinepdf} target="___blank">
          <button className="resumebutton">
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </a>
      </Row>
      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        <a href={onlinepdf} target="___blank">
          <button className="resumebutton">
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </a>
      </Row>
    </div>
  );
}

export default Resume;

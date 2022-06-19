import { jsPDF } from "jspdf";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import ResumeContainer from "./components/Resume";

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const generatePDF = useCallback(() => {
    if (!resumeRef.current) return;
    const doc = new jsPDF("p", "pt");
    doc.html(resumeRef.current, {
      callback: (doc) => doc.save("resume.pdf"),
      html2canvas: { scale: 1 },
    });
  }, [resumeRef.current]);
  return (
    <APPWrapper>
      <NavBarWrapper>
        <button onClick={generatePDF}>downLoadPdf</button>
      </NavBarWrapper>

      <ResumeContainer ref={resumeRef} />
    </APPWrapper>
  );
}
const APPWrapper = styled.main``;
const NavBarWrapper = styled.nav``;
const ResumeWrapper = styled.div`
  font-size: 40px;
  color: red;
`;
export default App;

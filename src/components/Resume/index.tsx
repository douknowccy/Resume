import { forwardRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import WorkExperience from "./WorkExperience";

const ResumeContainer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <ResumeContainerWrapper ref={ref}>
      <Title />
      <WorkExperience />
    </ResumeContainerWrapper>
  );
});

const ResumeContainerWrapper = styled.div``;
export default ResumeContainer;

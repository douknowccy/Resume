import React from "react";
import styled from "styled-components";
import { ContentText, HeaderText, LiSpanText, LiText, UlText } from "../Text";
const Title = () => {
  return (
    <TitleWrapper>
      <HeaderText>Header</HeaderText>
      <ContentText>Content</ContentText>
      <ContentText type="light">Content2</ContentText>
      <UlText>
        <LiText>
          <LiSpanText>123</LiSpanText>
        </LiText>
        <LiText>
          <LiSpanText>123</LiSpanText>
        </LiText>
        <LiText>
          <LiSpanText>123</LiSpanText>
        </LiText>
      </UlText>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.header``;
export default Title;

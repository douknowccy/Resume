import React, { ReactElement } from "react";
import styled, { CSSProperties } from "styled-components";
declare interface Props {
  children: ReactElement | ReactElement[] | string;
  style?: CSSProperties;
  type?: "light" | "dark";
}
const HeaderText = (props: Props) => {
  const { children, style, type = "dark" } = props;
  return (
    <HeaderTextWrapper theme={{ ...style }} type={type}>
      {children}
    </HeaderTextWrapper>
  );
};
const ContentText = (props: Props) => {
  const { children, style, type = "dark" } = props;
  return (
    <ContentTextWrapper theme={style} type={type}>
      {children}
    </ContentTextWrapper>
  );
};
const UlText = (props: Props) => {
  const { children, style } = props;
  return <UlTextWrapper theme={style}>{children}</UlTextWrapper>;
};
const LiText = (props: Props) => {
  const { children, style } = props;
  return <LiTextWrapper theme={style}>{children}</LiTextWrapper>;
};
const LiSpanText = (props: Props) => {
  const { children, style } = props;
  return <LiSpanTextWrapper theme={style}>{children}</LiSpanTextWrapper>;
};
const HeaderTextWrapper = styled.h1<Props>`
  margin: 0;
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  ${({ theme }) => theme};
`;
const ContentTextWrapper = styled.p<Props>`
  color: ${({ type }) =>
    type === "dark" ? "rgba(19, 18, 19, 1)" : "rgba(67, 64, 66, 0.7)"};

  margin: 0;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 2px;
  ${({ theme }) => theme}
`;
const UlTextWrapper = styled.ul<Props>`
  list-style-type: decimal;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  font-size: 18px;
  ${({ theme }) => theme}
`;
const LiTextWrapper = styled.li<Props>`
  margin-bottom: 2px;
`;
const LiSpanTextWrapper = styled.span<Props>`
  margin-left: -0.3rem;
  ${({ theme }) => theme}
`;
export { HeaderText, ContentText, UlText, LiText, LiSpanText };

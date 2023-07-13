import styled from "@emotion/styled";

type PageWrapProps = {
  justify?: "center" | "end" | "start";
  align?: "center" | "end" | "start";
  padding?: string;
};

export const PageWrap = styled.div<PageWrapProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  padding: ${(props) => props.padding || ""};
`;

export const TableContainer = styled.div`
  padding: 24px;
`;

import React from "react";
import styled, { css } from "styled-components";
// 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을
// 조건부로 설정해야 하는 경우에는 css를 불러와야 한다

const sizes = {
  desktop: 1024,
  table: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// props도 전달 가능
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  /* 기본으로 1024 가운데정렬
  가로 크기가 작아지면 크기 줄이고 꽉 채움 */
  width: 1024px;
  margin: 0 auto;

  ${
    "" /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
  }

  ${media.desktop`width: 768px`}
  ${media.width`width: 100%`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  ${"" /* & 이용해서 자기자신 선택 가능 sass동일 */}
  &:hover {
    background: rgb(255, 255, 0.9);
  }
  ${"" /* inverted가 true일때 */}
  ${(props) =>
    props.inverted &&
    //css빼도 되지만 vscode에서 문자열로 인식
    //tagged 탬플릿 리터럴이 아니라 (함수명``) 안에서 프롭스 사용불가
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>hi</Button>
      <Button inverted={true}>border only</Button>
    </Box>
  );
};

export default StyledComponent;

import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 467px;
  background: #ffffff;
  border: 1px solid rgba(164, 167, 183, 0.3);
  border-radius: 8px;
  padding: 30px 5%;
  margin: auto;
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #434854;
    text-align: "center";
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #737373;
    margin: 0 0 40px 0;
  }
  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #0a74dc;
  }
  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #303b54;
    background: #fff;
    padding: 2px;
    margin-top: 100px;
    text-decoration-line: underline;

    span {
      color: #c5c5c5;
      display:inline-block;
    }
  }
`;

export const ImageProfile = styled.div`
  display: flex;
  img {
    max-width: 318px;
    margin-right: 28px;
  }

  div {
    margin: auto;
    width: 90%;
    height: 90%;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 90px;
      color: #000000;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const SubmitBtn = styled.button`
	height: 48px;
	background: #0a74dc;
	border-radius: 6px;
	color: white;
	border: none;
	outline: none;
	width: 100%;
`

export const Notfound = styled.div`
	min-height: 100vh;
`
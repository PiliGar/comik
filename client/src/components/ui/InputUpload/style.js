import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  margin-bottom: 2rem;
  cursor: pointer;
  input[type="file"] {
    font-size: 40px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .upload-btn {
    border: none;
    background-color: transparent;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    color: ${({ theme: { color } }) => color.plus};
    svg {
      height: 1.6rem;
    }
  }
  &:hover > button {
    color: ${({ theme: { color } }) => color.primary};
  }
`;

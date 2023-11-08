import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListMovie = styled.ul`
display: flex;
  flex-direction: column;
  margin-top: 30px;
  pading: 8px;
  gap:8px;
  margin-left: 20px; 
`
export const LinkMovie = styled(Link)`
  text-decoration: none;
  font-size: 18px;
`
export const MovieItem = styled.li`
  height: 24px;
`
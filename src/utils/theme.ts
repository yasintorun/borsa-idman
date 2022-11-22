import styled from "styled-components/native";

type ColorTextType = {color: string}
export const StyledColorText = styled.Text<ColorTextType>`
    color: ${props => props.color}
`
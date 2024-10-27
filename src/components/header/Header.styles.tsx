import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    color: #4b4b4b;
    will-change: color, opacity;
    transition: color, opacity 300ms;
    &.active, &:hover {
        opacity: 0.6;
    }        
`;
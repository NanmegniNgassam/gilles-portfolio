import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: #707070;
    will-change: color, opacity;
    transition: color, opacity 300ms;
    &.active, &:hover {
        opacity: 0.7;
    }        
`;
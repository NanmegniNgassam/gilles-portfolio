import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const StyledLink = styled(NavLink)`
    color: ${Colors.lightBlack};
    will-change: color, opacity;
    transition: color, opacity 300ms;
    &.active, &:hover {
        opacity: 0.6;
    }        
`;
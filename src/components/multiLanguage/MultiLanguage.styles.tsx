import { MenuItem } from "@mui/material";
import styled from "styled-components";

export const StyledMenuItem = styled(MenuItem)`
    display: flex;
    gap: 10px;
    align-items: center;
    img {
        width: 20px;
        aspect-ratio: 1/1;
    }
`;
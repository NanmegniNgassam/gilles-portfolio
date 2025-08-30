import styled from "styled-components";


 

const ImageCard = () => {
  const StyledImage = styled.div`
    background-image: url('/images/junior.jpg');
    background-position: center;
    background-size: cover;
    width: 400px;
    aspect-ratio: 1/1;
    overflow: hidden;
  `;

  return (
    <StyledImage>
      Hey
    </StyledImage>
  );
}
 
export default ImageCard;
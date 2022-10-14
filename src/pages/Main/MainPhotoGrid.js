import React from "react";
import styled from "styled-components";

const MainPhotoGrid = () => {
  return (
    <S.Wrap>
      <S.GridBox>
        <S.GridOne />
        <S.GridTwo />
        <S.GridThree />
        <S.GridFour />
        <S.GridFive />
        <S.GridSix />
      </S.GridBox>
    </S.Wrap>
  );
};

export default MainPhotoGrid;

const Grid = styled.div`
  height: 600px;
  background-position: center;
  background-size: cover;
`;

const S = {
  Wrap: styled.div`
    width: 1200px;
    margin: 0 auto 100px;
  `,

  GridBox: styled.div`
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  `,

  Grid: styled.div`
    height: 600px;
    background-position: center;
    background-size: cover;
  `,

  GridOne: styled(Grid)`
    grid-column: 1/3;
    background-image: url(https://velog.velcdn.com/images/rayong/post/b4e330a6-0a9d-4179-94ea-6f9bba9952fd/image.jpg);
  `,

  GridTwo: styled(Grid)`
    background-image: url(https://velog.velcdn.com/images/rayong/post/38461d7c-9408-4ef7-9b65-731aa1ed367f/image.jpg);
  `,

  GridThree: styled(Grid)`
    background-image: url(https://velog.velcdn.com/images/rayong/post/39b9bf1d-8252-49c2-9835-a3fec406913c/image.jpg);
  `,

  GridFour: styled(Grid)`
    background-image: url(https://velog.velcdn.com/images/rayong/post/50c30637-2563-4156-ae8a-5648d587f0ea/image.jpg);
  `,

  GridFive: styled(Grid)`
    grid-row: 2;
    grid-column: 2/4;
    background-image: url(https://velog.velcdn.com/images/rayong/post/f036155b-e997-438e-823c-5c4a74b0b9d5/image.jpg);
  `,

  GridSix: styled(Grid)`
    background-image: url(https://velog.velcdn.com/images/rayong/post/157b2863-0720-455f-afb9-0db076195499/image.jpg);
  `,
};

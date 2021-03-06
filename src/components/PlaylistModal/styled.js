import styled from "styled-components"
import { mainColor } from "../../constants/Colors"


export const ModalContainer = styled.div` 
  background: rgba(242, 243, 245, 0.9);
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
   

  display: flex;
  justify-content: center;
  align-items: center;
`


export const Wrapper = styled.div`
  background: white;
  box-shadow: 0 0 60px rgba(0, 0, 0.4, 0.5);
  border-radius: 10px;
  position: relative; 
  width: 100%;
  max-width: 420px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
` 

export const Logo = styled.img`
  width: 5rem;
`

export const TitlePage = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  color: ${mainColor};
  margin: 8% 0 2% 0;
`

export const FormConteiner = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 338px;
  max-width: 300px;
  border-radius: 2px;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6%;
`


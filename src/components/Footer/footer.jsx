import styled, {createGlobalStyle} from "styled-components"
import Cancer from "./cancer.png"

const Final = styled.footer`
display:flex;
align-items:center;
justify-content:space-around;
background-color: #FFA0D9;
    
`
const Imagem3 = styled.img`
width: 120px;
height: 98px;

`
const Link = styled.a`
color:white;
    
`

export default function Footer (){
    return(
        <Final>

    <Link href="https://www.gov.br/inca/pt-br" target="_blank">Instituto Nacional de Câncer - INCA</Link>

    <Imagem3 src={Cancer} alt="Cancer de mama" />

    <Link href="https://www.uicc.org/events/special-focus-dialogue-rethinking-pink-october-how-increase-engagement-public-virtually" target="_blank">Union for International Cancer Control (UICC)</Link>

          
        
        
        
        </Final>
    )
}
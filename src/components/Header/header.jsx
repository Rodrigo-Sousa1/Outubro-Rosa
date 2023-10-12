import styled, {createGlobalStyle} from "styled-components"
import Logo from "./logo.png"

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`

const Headerstyled = styled.header `
background-color: #FFA0D9;
height:18vh;
display:flex;
justify-content: space-around;
align-items:center;
`

const Imagem1 = styled.img`
width:100px;
height: 100px;

`

const NavBar = styled.nav`
width:90vw;
display:flex;
align-items:center;
    
`

const Lista = styled.ul`
display:flex;
justify-content:space-around;
width:100%;

`
const Li = styled.li`
color: #FFF;
font-family: cursive;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
list-style:none;
`

export default function Header() {
    return(

        <Headerstyled>
            <EstiloGlobal/>
            
                <Imagem1 src= {Logo} alt="Logo" />

                <NavBar>
                    <Lista>
                        <Li>CARTILHA</Li>
                        <Li>FOLHETO COLO DO ÚTERO</Li>
                        <Li>FOLHETO MAMA</Li>
                        <Li>KIT MATERIAIS</Li>
                    </Lista>
                </NavBar>
            




        </Headerstyled>
    )
}
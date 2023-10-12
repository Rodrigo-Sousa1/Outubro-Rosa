import styled, {createGlobalStyle} from "styled-components"
import { useState } from "react"
import Menina from "./menina.png"

const Meio = styled.main`
display:flex;
justify-content:space-around;`

const Secao1 =styled.section`
margin-top: 10px;
margin-left:10px;`

const SubTitulo = styled.h2`
    color: #FFA0D9;
    font-family: cursive;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 60%;
    height: 15vh;`

const Imagen2 = styled.img`
    height:410px;
    width:550px;`

const Sintomas = styled.ul`
list-style: none;`

const Lista = styled.li`
background-color:#FFA0D9;
border-radius:40px;
width:60%;
height:50px;
display:flex;
align-items:center;
color: #000;
font-family: cursive;
font-size: 20px;
font-style: normal;
font-weight: 400;
padding:10px;
margin-top:10px;`


export default function Main () {
    const [sintomas, setSintomas] = useState ([
       "1. Nódulo palpável na mama, Pele avermelhada ou retraída.", "2. sem resposta a tratamentos tópicos;", "3. Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção", "4. Dor ou inchaço em parte ou na totalidade das mamas", "5. Nódulos cervicais ou na axila"
    ])

    return(
        <Meio>

            <Secao1> 
         
        <SubTitulo>   Os principais sinais de alerta ou sintomas do câncer de mama são: </SubTitulo>
        <Sintomas>
           
            {sintomas.map((Item)=>(<Lista>{Item}</Lista>))}

           
        </Sintomas>
            </Secao1>


        <Imagen2 src= {Menina} alt="Menina" />

        
        
        
        
        </Meio>
    )
}
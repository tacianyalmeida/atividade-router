import Image1 from "../../Image/email.png"
import Image2 from "../../Image/phone-call.png"
import { Link } from 'react-router-dom';
import { Campo, Campo2, Div1, DivEmail, DivFone, P1, P3, P2,P4, Titulo, ImgEmail, ImgFone   } from '../Styled-Components/Contato';


const Contato = ()=>{
    return( <> 
    <Div1> 
    <Titulo>Como você pode tirar suas duvidas?</Titulo> </Div1>
    

     <DivEmail>
     <ImgEmail src={Image1} />
        <Campo>E-mail</Campo>
        <P1>fale com a melhor de química</P1>
        < P2>jeannyneLeite@gmail.com</P2>
     </DivEmail>
      
      <DivFone>
      <ImgFone src={Image2} />
        <Campo2>Telefone</Campo2>
        <P3>Você pode ligar a qualquer hora </P3>
        <P4>0800 385 2546</P4>
      </DivFone>

   <Link href="https://phet.colorado.edu/pt_BR/">Aprenda_mais</Link>
     </>
    )
}
export default Contato;
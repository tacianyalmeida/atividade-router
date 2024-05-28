import img from '../../Image/qimicaOrganica.jpg'
import { Div1, Titulo, Paragrafo1, Paragrafo2, Imagem } from '../Styled-Components/Home';

const Home = () => {
    return (<>
    <Div1> 
        <Titulo>Seja Bem-Vindo</Titulo>
        <Paragrafo1>Histórico da Química Orgânica</Paragrafo1></Div1>
        <Paragrafo2>O início do estudo da Química Orgânica data da metade do século XVIII, quando acreditava-se que os compostos orgânicos
            eram somente sintetizados pelos organismos vivos.
            Ao mesmo tempo, os compostos inorgânicos eram aqueles originários de organismos não-vivos, os quais pertenciam ao Reino Mineral.
            A Teoria da Força Vital postulava que as substâncias orgânicas não poderiam ser sintetizadas em laboratório,
            pois apenas os organismos vivos possuíam a energia necessária para isso.
            Porém, em 1828, o químico alemão Friedrich Wöhler (1800-1882) sintetizou a ureia em laboratório a partir
            de um composto inorgânico, o cianato de amônio. Com isso, ele demonstrou que nem sempre os compostos orgânicos são originários de organismos vivos.
            A partir daí, a Química Orgânica passou a se referir apenas ao estudo dos compostos de carbono.</Paragrafo2>
           
           <Imagem src={img} />
           
            </>)
}
export default Home;
import img from '../../Image/atomo-carbono.webp'
import { TituloPrincipal } from '../Styled-Components/Sobre';


const Sobre = () => {
    return (<>
        <TituloPrincipal>Características do Carbono</TituloPrincipal>
        <img src={img} />
        <p>O carbono é o elemento químico principal que forma
            todos os compostos orgânicos. Ele é um ametal e conforme a
            tabela periódica, possui as seguintes características:</p>
        <ul> <li>Massa atômica (A) igual a 12;</li>
            <li>Número atômico (Z) igual a 6;</li>
            <li>Configuração eletrônica: K = 2 e L = 4;</li>
            <li>Distribuição eletrônica em estado fundamental: 1s2 2s2 2p2;</li>
            <li>Apresenta quatro elétrons na camada de valência;</li>
            <li>Pode formar quatro ligações covalentes;</li>
            <li>Pode formar cadeias curtas ou longas e com várias disposições;</li>
            <li>Alta capacidade de se ligar a outros átomos.</li>
        </ul>

        <p>O carbono é classificado de acordo com a posição que ocupa
            na cadeia carbônica. Ele pode ser primário (ligado a um carbono),
            secundário (ligado a dois carbonos), terciário
            (ligado a três carbonos) ou quaternário (ligado a quatro carbonos).</p>


        <h1>Cadeias carbônicas</h1>

        <p>A cadeia carbônica representa o conjunto de todos os carbonos e
            demais elementos presentes em um composto orgânico.
            As cadeias carbônicas podem ser abertas, fechadas ou mistas:</p>
        <ul><li>Cadeias carbônicas abertas, acíclicas ou alifáticas:
            são aquelas que possuem duas ou mais extremidades livres. </li>
            <li>Cadeias carbônicas fechadas, cíclicas ou alicíclicas:
                são aquelas em que não há extremidades livres, ou seja, forma-se um ciclo.</li>
            <li>Cadeias carbônicas mistas:
                são aquelas que possuem uma porção com extremidade livre e outra porção fechada.</li>

            <p>Cadeias carbônicas mistas: são aquelas que possuem uma porção com extremidade livre e outra porção fechada.</p>

            <li>Cadeias carbônicas homogêneas: as que possuem apresentam átomos de carbono e hidrogênio.</li>
            <li>Cadeias carbônicas heterogêneas: as que apresentam heteroátomo.</li>
            <li>Cadeias carbônicas saturadas: apresentam apenas ligações simples entre os átomos de carbono.</li>
            <li>Cadeias carbônicas insaturadas: apresentam alguma ligação dupla ou tripla entre os átomos de carbono.</li>
            <a href="https://www.todamateria.com.br/cadeias-carbonicas/">Descubra_Mais</a>
        </ul>
        

    </>)
}
export default Sobre;
import './SobreNosConteudo.css';

export const SobreNosConteudo = () => (
    <section className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-8'>
                <div className='oquefazemos'>
                    <h2>O que fazemos?</h2>
                    <p>No TechManager Academy, capacitamos líderes e gestores de tecnologia para enfrentar os desafios do mundo digital em constante evolução. Nossa missão é oferecer cursos práticos e atualizados que abordam desde gestão ágil de projetos até inovação tecnológica, preparando profissionais para liderar equipes e transformar empresas com eficiência.</p>
                    <p>Acreditamos que o aprendizado contínuo é a chave para o sucesso em tecnologia. Por isso, nossos cursos são projetados para se adaptarem às demandas do mercado, oferecendo conteúdos relevantes e experiências práticas. Além disso, conectamos nossos alunos com mentores experientes do setor, proporcionando uma troca rica de conhecimentos e networking valioso.</p>
                    <p>Seja você um gestor experiente ou alguém que está começando sua trajetória em liderança de TI, o TechManager Academy oferece o suporte e as ferramentas necessárias para desenvolver suas habilidades e alcançar novos patamares em sua carreira. Estamos aqui para guiar sua jornada de transformação e crescimento profissional.</p>
                </div>
                
                <img className='imgconteudo' src='/ImgConteudo.png' alt='ImgConteudo'/>
            
                <div className='valores'>
                    <h2>Nossos Valores</h2>
                    <ul>
                        <li><strong>Inovação:</strong> Incentivamos a busca constante por novas soluções e tecnologias que impulsionem o mercado.</li>
                        <li><strong>Excelência:</strong> Compromisso em oferecer a melhor experiência de aprendizado, com cursos de alta qualidade.</li>
                        <li><strong>Colaboração:</strong> Acreditamos que o sucesso é alcançado quando compartilhamos conhecimento e trabalhamos juntos.</li>
                        <li><strong>Transformação:</strong> Capacitar líderes a promover mudanças significativas em suas organizações e no setor de tecnologia.</li>
                    </ul>
                </div>
                <h3 className='chamada-acao'>Não perca essa oportunidade, vamos construir algo incrível juntos!</h3>
            </div>
        </div>
    </section>
);

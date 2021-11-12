import * as styled from './styles'
function Header(props){
    return (
        <styled.Container>
            <header>
                <div id='containerTitulo'>
                    <h1>Receitas dos Benhês</h1>
                </div>
                <styled.Button>
                    <div class='menuColapsavel'>
                        
                        <input type="checkbox" id="menu" />
                        <label for='menu'> Menu </label>
                        
                        <div class='conteudo'>
                            <ul>
                                <li><a href='www.google.com'>Com Carne</a></li>
                                <li><a href='www.google.com'>Sem Carne</a></li>
                                <li><a href='www.google.com'>Vegano</a></li>
                                <li><a href='www.google.com'>Sobremesa</a></li>
                                <li><a href='www.google.com'>Adcionar Receita</a></li>
                            </ul>
                        </div>
                    </div>
                </styled.Button>
                
            
            </header>
        </styled.Container>
    )
}

export default Header;
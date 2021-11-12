import styled from 'styled-components'

export const BodyRule = styled.body`
    * {
        padding: 0px;
        margin: 0px;
    }
`

export const Container = styled.header`
header{display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: tomato;
    padding-bottom: 10px;
}
    h1{
        font-size: xx-large;
        font-family: sans-serif;
    }
    #containerTitulo{
        width: 100%;
        display:flex;
        justify-content: center;
        flex-grow: 1;
        background-color:blue;
        
    }
    .menuColapsavel{
        align-self: flex-start;
        background-color: red;
        
        padding: 0px 30px;
        border-bottom: 3px solid #CDE700;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: xx-large;
        
    }
    .conteudo{
        font-family: 'Oswald', sans-serif; 
        padding: 0 0 0 0px;
        max-height: 0;
        overflow: hidden;
    
    
    }

    .menuColapsavel > .conteudo > ul {
        list-style-type: none;
        padding: 0;
        text-align:left;
    }
    a {
        display:block;
        padding: 10px;
        text-decoration: none;
        color: white;
    }
    input#menu {
        display: none;
    }
    input:checked +label {
        background-image: url(/img/menu.png);
        background-size: 50px;
    }

    input:checked ~ .conteudo {
        max-height: 100%;
    }
    .menuColapsavel > label {
        font-family: 'Sedgwick Ave Display', cursive;
        font-size: 56px;
        display: block;
        cursor: pointer;
        background: url(menu.png) no-repeat left center;
        padding: 10px 0 10px 30px;
    }
    
`
export const Button = styled.button`
    button{
        background-color: none;
        font-size: larger;
        border: none;
        margin-right:5px

}
`
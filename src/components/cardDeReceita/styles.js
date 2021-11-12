import styled from 'styled-components'

export const Cards = styled.div`
    #Card{
        width: 100px;
        height: 100px;
        background-color: blue;
        display: flex;
        justify-content: flex-end;
        color: white;
        z-index: -1;
        
    }
    #info{
        width: 100px;
        height: 25px;
        background-color: black;
        display: flex;
        justify-content: center;
        color: white;
        z-index: 1;
        position: relative;
        top:-50px;
        left:0px;
    }
    img{
        z-index: 0;
        width:100px;
        height:100px;
    }
`
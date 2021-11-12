import * as styled from './styles'

function Card(props){
    return(
        <styled.Cards>
            <img src={props.img} alt={props.alt}/>
            <div id="info">{props.titulo}</div>
            {/* <div id='Card'> */}
                
                
            {/* </div> */}
        </styled.Cards>
    )
}
export default Card
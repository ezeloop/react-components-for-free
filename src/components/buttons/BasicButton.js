import styled from 'styled-components';

const BasicButton = styled.button `
width: ${props => props.width ? props.width : '200px'};
cursor: pointer;
background-color: ${props => props.backgroundColor ? props.backgroundColor : "#ddd"};
color: ${props => props.color ? props.color : "black"};
font-size: ${props => props.fontSize ? props.fontSize : "1.3em"};
margin: 1em;
padding: 0.50em 1em;
border: 2px solid ${props => props.borderColor ? props.borderColor : "white"};
border-radius: ${props => props.borderRadius ? '90px' : "7px"};
text-align: center;
transition: 0.1s;
box-shadow: 0 2px 2px 1px #666;

&:active{
    transform: translateY(1px);
}
`;

export default BasicButton;
import styled from "styled-components"

const buttonType = ({primary}) =>{
    if(primary){
        return {
            background: '#1ea7fd',
            color: 'white'
        }
    }
    else{
        return {
            background: 'transparent',
            color: '#333',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
        }
    }
}

const buttonSize = ({size}) => {
    if(size === 'small'){
        return {
            fontSize: '12px',
            padding: '10px 16px'
        }
    }

    if(size === 'medium'){
        return {
            padding: '11px 20px'
        }
    }

    if(size === 'large'){
        return {
            fontSize: '16px',
            padding: '12px 24px'
        }
    }
}

export const StyledButton = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: ${props => props.rounded? '3em' : '0em'};
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${buttonType}
    ${buttonSize}
    &:hover {
        background: ${props => props.primary? '#1885c9' : '#8a959c'}
    }
    &:active {
        background: ${props => props.primary? '#103d59' : '#bfc4c7'}
    }
`
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 100%;

    background: ${props => props.theme.colors.header};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
`

export const Logo = styled.div`
    img{
        width: 14rem;
    }

`

export const MadeBy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 1.5rem;
    }

    span{
        margin: 0 0.5rem;
    }
`
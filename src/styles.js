import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
export const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

export const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content:'';
    display:block;
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
  }
`
// Styles for Custom Hooks
export const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: block;
`

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`
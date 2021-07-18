import styled from 'styled-components'

export const Navbar = styled.nav`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
    background-color: #212529;
    color: #fff;
`;

export const ContainerFluid = styled.div`
    display: flex !important;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between
    width: 100%
`;

export const Collapse = styled.div`
    display: flex !important;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
`;

export const NavbarBrand = styled.a`
    padding: 2rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const Form = styled.form`
    display: block !important;
`;
import styled from '@emotion/styled';


export const ContenedorFormulario = styled.div`
    max-width: 400px;
    margin: 100px auto;
    background-color: white;
    padding: 40px;
    border: 2px solid #eee;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,.5); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,.5);

    @media(min-width: 780px){
        margin: 20vh auto 0 auto;
    }
`;

export const FormLogin = styled.form`
    input{
        width: 100%;
        margin: 10px 0;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        outline: none;
    }
    input[type="submit"]{
        background:#91D9F0;
        color: white;
    }
`;

export const FormRegistro = styled.form`
    margin-bottom: 10px;
    .campos-items{
        display: flex;
        flex-direction: column;
        input[type="text"], input[type="password"], input[type="email"]{
            padding: 10px;
            border-radius: 8px;
            outline: none;
            border: 1px solid #ddd;
        }
        label{
            padding-bottom: 8px;
            padding-top: 8px;
        }
    }
    input[type="submit"]{
        width: 100%;
        margin-top: 10px;
        padding:10px;
        border-radius: 8px;
        background-color: #91D9F0;
        border: none;
    }
`; 

export const RegistroSocial = styled.div`
    text-align: center;

    .title-social{
        font-size: 18px;
        position: relative;
        color: #ddd;
        &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 10%;
            height: 2px;
            background-color: #ddd;
        }
        &::after{
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            width: 10%;
            height: 2px;
            background-color: #ddd;
        }
    }

    a{
        display: block;
        border-bottom: 2px solid #eee;
        padding: 5px;
        color: #ddd;
        cursor: pointer;
    }

    button{
        width: 100%;
    }

    button:first-of-type{
        margin-bottom: 10px;
    }
`;

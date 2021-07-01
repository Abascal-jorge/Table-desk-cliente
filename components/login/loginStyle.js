import styled from '@emotion/styled';


const ConetenedorLogin = styled.div`
    max-width: 400px;
    background-color: white;
    margin: 20vh auto;
    padding: 40px;
    border: 2px solid white;
    -webkit-box-shadow: 5px 5px 15px 5px #eee; 
    box-shadow: 5px 5px 15px 5px #eee;

    form{
        input{
            width: 100%;
            margin: 10px 0;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 8px;
        }
        input[type="submit"]{
            background:#91D9F0;
            color: white;
        }
    }

    button{
        width: 100%;
    }

    button:first-of-type{
        margin-bottom: 10px;
    }

    .registro-social{
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
    }
`;

export default ConetenedorLogin;

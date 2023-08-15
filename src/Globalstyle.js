import {createGlobalStyle} from 'styled-components';
const  Globalstyle =createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        font-family:'Inter',sans-serif;

    }
    body{
        color:#6c7983;
        font-size:1.2rem;
    }
`;
export default Globalstyle;
import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

body {
  margin: 0;
  font-family: 'Manrope',  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Theme.colors.fontTitle};
  line-height: 1.2;
}

a{
    text-decoration: none; /* убираем подчеркивание у ссылок */
}

ul{
    list-style: none;
}

button{
    background-color: unset;
    border: none;
}

section:nth-of-type(odd){ /* для четных секций */
    background-color: ${Theme.colors.primaryBg};
}

section:nth-of-type(even){ /* для нечетных секций */
    background-color: ${Theme.colors.primaryBg};
}

`;

import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
// import Circle from "./Circle";
// import { useState } from 'react';
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-weight: 300;
  line-height: 1.2;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (<>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  </>);
}

/*
  App은 두 변수들을 관장한다. App (isDark, modifierFn)
  두 변수들은 Coins와 Chart에 각각 전달이 되는데, 전달이 되기까지 여러 컴포넌트들을 거쳐가야 한다. (계층구조)
  Modifer(toggleDark) : App -> Router -> Coins
  isDark : App -> Router -> Coin -> Chart

  이런 현상을 지양하기 위해서 필요한 것이 Global State이다. 
  Global State는 Application이 전반적으로 인지해야하는 상태를 적용하기 위해 사용된다. 
  어디에서든지 확인할 수 있는 변수!**
  Application에서 분리된 공간에서 관리되는 변수들이다. 

  ==> RECOIL
*/

export default App;

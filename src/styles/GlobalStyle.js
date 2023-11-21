import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  position: relative;
  overflow-x: hidden;

    ::selection {
        color: ${({ theme }) => theme.colors.theme1};;
        background: ${({ theme }) => theme.colors.theme2a};;
    }
}

.heading{
    color: ${({ theme }) => theme.colors.heading};
}

.surface{
    background-color: ${({ theme }) => theme.colors.surface};
}

.fff{color:#fff;}
.fff-bg{background-color:#fff;}

a{
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

ul{
    margin: 0;
    padding: 0;
    li{
        list-style: none;
        margin: 0;
    }
}

.font-100{font-weight:100}
.font-200{font-weight:200}
.font-300{font-weight:300}
.font-400{font-weight:400}
.font-500{font-weight:500}
.font-600{font-weight:600}
.font-700{font-weight:700}
.font-800{font-weight:800}
.font-900{font-weight:900}

.font10{font-size: 10px;}
.font11{font-size: 11px;}
.font12{font-size: 12px;}
.font13{font-size: 13px;}
.font14{font-size: 14px;}
.font15{font-size: 15px;}
.font16{font-size: 16px;}
.font17{font-size: 17px;}
.font18{font-size: 18px;}
.font19{font-size: 19px;}
.font20{font-size: 20px;}
.font21{font-size: 21px;}

.space-1{letter-spacing:1px};
.space-2{letter-spacing:2px};
.space-3{letter-spacing:3px};
.space-4{letter-spacing:4px};

.audio{
    font-family: 'Audiowide', cursive;
}

.uppercase{text-transform:uppercase}

.lowercase{text-transform: lowercase}

.title{text-transform: capitalize}
.text-unset{text-transform:none !important;}

.cursor-pointer{cursor:pointer}

.flex-wrap{flex-wrap: wrap;}

.ip-box{
    background-color:${({ theme }) => theme.colors.surface};
    border-radius: 16px;
    box-shadow: 0px 0px 41px -8px ${({ theme }) => theme.other.boxShadow};
}

.ip-border-bottom{
    border-bottom: 2px solid ${({ theme }) => theme.colors.theme1};
}
.ip-border-top{
    border-top: 1px solid ${({ theme }) => theme.colors.theme1};
}
.ip-border{
    border: 1px solid ${({ theme }) => theme.colors.theme1};
}

.gradient-text {
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.theme1}, ${({ theme }) => theme.colors.theme2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading{
    color: ${({ theme }) => theme.colors.heading};
}
.hover:hover{
    color: ${({ theme }) => theme.colors.heading};
}

`;
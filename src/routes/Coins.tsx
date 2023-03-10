import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Title = styled.h1`
color: ${props => props.theme.accentColor};`

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.cardBgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    border: 1px solid white;
    a {  
        padding: 20px;
        transition: color 0.1s ease-in;
        display: flex;
        align-items: center;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.accentColor}
        }
    }
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

const ThemeSwitch = styled.button<IThemeSwitch>`
    border: none;
    background: transparent;
    color: ${({ isDark }) => isDark?"whitesmoke":"#353b48"};
`

interface IThemeSwitch{
    isDark: boolean;
}

const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];

function Coins() {
    const isLoading  = false;

    const isDark = useRecoilValue(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom(prev => !prev);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    // const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    return (
        <Container>
            <Helmet>
                <title>??????</title>
            </Helmet>
            <Header>
                <Title>??????</Title>
                <ThemeSwitch isDark={ isDark } onClick={ toggleDarkAtom }>
                    <FontAwesomeIcon icon={ isDark? faSun : faMoon } />
                </ThemeSwitch>    
            </Header>
            {isLoading? (<Loader>Loading...</Loader>) : (    
                <CoinsList>
                    {/* a tag refreshes the webpage thus we use "LINK"s */}
                    {coins?.slice(0, 10).map((coin) => (
                        <Coin key={coin.id}>
                            <Link 
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name },
                                }}
                            >
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>))}
                </CoinsList>)}
        </Container>
    );
}

export default Coins;
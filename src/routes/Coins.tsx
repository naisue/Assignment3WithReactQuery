import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
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

const coins = [{"id":"btc-bitcoin","name":"Bitcoin","symbol":"BTC","rank":1,"is_new":false,"is_active":true,"type":"coin"},{"id":"eth-ethereum","name":"Ethereum","symbol":"ETH","rank":2,"is_new":false,"is_active":true,"type":"coin"},{"id":"usdt-tether","name":"Tether","symbol":"USDT","rank":3,"is_new":false,"is_active":true,"type":"token"},{"id":"usdc-usd-coin","name":"USD Coin","symbol":"USDC","rank":4,"is_new":false,"is_active":true,"type":"token"},{"id":"bnb-binance-coin","name":"Binance Coin","symbol":"BNB","rank":5,"is_new":false,"is_active":true,"type":"coin"},{"id":"xrp-xrp","name":"XRP","symbol":"XRP","rank":6,"is_new":false,"is_active":true,"type":"coin"},{"id":"busd-binance-usd","name":"Binance USD","symbol":"BUSD","rank":7,"is_new":false,"is_active":true,"type":"token"},{"id":"doge-dogecoin","name":"Dogecoin","symbol":"DOGE","rank":8,"is_new":false,"is_active":true,"type":"coin"},{"id":"ada-cardano","name":"Cardano","symbol":"ADA","rank":9,"is_new":false,"is_active":true,"type":"coin"},{"id":"matic-polygon","name":"Polygon","symbol":"MATIC","rank":10,"is_new":false,"is_active":true,"type":"token"},{"id":"okb-okb","name":"OKB","symbol":"OKB","rank":11,"is_new":false,"is_active":true,"type":"token"},{"id":"dai-dai","name":"Dai","symbol":"DAI","rank":12,"is_new":false,"is_active":true,"type":"token"},{"id":"steth-lido-staked-ether","name":"Lido Staked Ether","symbol":"STETH","rank":13,"is_new":false,"is_active":true,"type":"token"},{"id":"hex-hex","name":"HEX","symbol":"HEX","rank":14,"is_new":false,"is_active":true,"type":"token"},{"id":"ltc-litecoin","name":"Litecoin","symbol":"LTC","rank":15,"is_new":false,"is_active":true,"type":"coin"},{"id":"trx-tron","name":"TRON","symbol":"TRX","rank":16,"is_new":false,"is_active":true,"type":"coin"},{"id":"shib-shiba-inu","name":"Shiba Inu","symbol":"SHIB","rank":17,"is_new":false,"is_active":true,"type":"token"},{"id":"sol-solana","name":"Solana","symbol":"SOL","rank":18,"is_new":false,"is_active":true,"type":"token"},{"id":"weth-weth","name":"WETH","symbol":"WETH","rank":19,"is_new":false,"is_active":true,"type":"token"},{"id":"dot-polkadot","name":"Polkadot","symbol":"DOT","rank":20,"is_new":false,"is_active":true,"type":"coin"},{"id":"avax-avalanche","name":"Avalanche","symbol":"AVAX","rank":21,"is_new":false,"is_active":true,"type":"coin"},{"id":"leo-leo-token","name":"LEO Token","symbol":"LEO","rank":22,"is_new":false,"is_active":true,"type":"token"},{"id":"toncoin-the-open-network","name":"The Open Network","symbol":"TONCOIN","rank":23,"is_new":false,"is_active":true,"type":"coin"},{"id":"wbtc-wrapped-bitcoin","name":"Wrapped Bitcoin","symbol":"WBTC","rank":24,"is_new":false,"is_active":true,"type":"token"},{"id":"atom-cosmos","name":"Cosmos","symbol":"ATOM","rank":25,"is_new":false,"is_active":true,"type":"coin"},{"id":"xmr-monero","name":"Monero","symbol":"XMR","rank":26,"is_new":false,"is_active":true,"type":"coin"},{"id":"link-chainlink","name":"Chainlink","symbol":"LINK","rank":27,"is_new":false,"is_active":true,"type":"token"},{"id":"etc-ethereum-classic","name":"Ethereum Classic","symbol":"ETC","rank":28,"is_new":false,"is_active":true,"type":"coin"},{"id":"uni-uniswap","name":"Uniswap","symbol":"UNI","rank":29,"is_new":false,"is_active":true,"type":"token"},{"id":"bch-bitcoin-cash","name":"Bitcoin Cash","symbol":"BCH","rank":30,"is_new":false,"is_active":true,"type":"coin"},{"id":"xlm-stellar","name":"Stellar","symbol":"XLM","rank":31,"is_new":false,"is_active":true,"type":"coin"},{"id":"qnt-quant","name":"Quant","symbol":"QNT","rank":32,"is_new":false,"is_active":true,"type":"token"},{"id":"algo-algorand","name":"Algorand","symbol":"ALGO","rank":33,"is_new":false,"is_active":true,"type":"coin"},{"id":"near-near-protocol","name":"Near Protocol","symbol":"NEAR","rank":34,"is_new":false,"is_active":true,"type":"coin"},{"id":"btcb-binance-bitcoin","name":"Binance Bitcoin","symbol":"BTCB","rank":35,"is_new":false,"is_active":true,"type":"token"},{"id":"ape-apecoin","name":"ApeCoin","symbol":"APE","rank":36,"is_new":false,"is_active":true,"type":"token"},{"id":"ht-huobi-token","name":"Huobi Token","symbol":"HT","rank":37,"is_new":false,"is_active":true,"type":"token"},{"id":"vet-vechain","name":"VeChain","symbol":"VET","rank":38,"is_new":false,"is_active":true,"type":"coin"},{"id":"fil-filecoin","name":"Filecoin","symbol":"FIL","rank":39,"is_new":false,"is_active":true,"type":"coin"},{"id":"ldo-lido-dao","name":"Lido DAO","symbol":"LDO","rank":40,"is_new":false,"is_active":true,"type":"token"},{"id":"icp-internet-computer","name":"Internet Computer","symbol":"ICP","rank":41,"is_new":false,"is_active":true,"type":"coin"},{"id":"luna-terra","name":"Terra Classic","symbol":"LUNC","rank":42,"is_new":false,"is_active":true,"type":"coin"},{"id":"frax-frax","name":"Frax","symbol":"FRAX","rank":43,"is_new":false,"is_active":true,"type":"token"},{"id":"cro-cryptocom-chain","name":"Cronos","symbol":"CRO","rank":44,"is_new":false,"is_active":true,"type":"token"},{"id":"hbar-hedera-hashgraph","name":"Hedera Hashgraph","symbol":"HBAR","rank":45,"is_new":false,"is_active":true,"type":"coin"},{"id":"wbnb-wrapped-bnb","name":"Wrapped BNB","symbol":"WBNB","rank":46,"is_new":false,"is_active":true,"type":"token"},{"id":"eos-eos","name":"EOS","symbol":"EOS","rank":47,"is_new":false,"is_active":true,"type":"coin"},{"id":"usdp-paxos-standard-token","name":"Paxos Standard","symbol":"USDP","rank":48,"is_new":false,"is_active":true,"type":"token"},{"id":"tusd-trueusd","name":"TrueUSD","symbol":"TUSD","rank":49,"is_new":false,"is_active":true,"type":"token"},{"id":"bit-bitdao","name":"BitDAO","symbol":"BIT","rank":50,"is_new":false,"is_active":true,"type":"token"},{"id":"bsv-bitcoin-sv","name":"Bitcoin SV","symbol":"BSV","rank":51,"is_new":false,"is_active":true,"type":"coin"},{"id":"egld-elrond","name":"MultiversX (Elrond)","symbol":"EGLD","rank":52,"is_new":false,"is_active":true,"type":"coin"},{"id":"aave-new","name":"Aave","symbol":"AAVE","rank":53,"is_new":false,"is_active":true,"type":"token"},{"id":"flow-flow","name":"Flow","symbol":"FLOW","rank":54,"is_new":false,"is_active":true,"type":"coin"},{"id":"theta-theta-token","name":"THETA","symbol":"THETA","rank":55,"is_new":false,"is_active":true,"type":"coin"},{"id":"xtz-tezos","name":"Tezos","symbol":"XTZ","rank":56,"is_new":false,"is_active":true,"type":"coin"},{"id":"usdd-usdd","name":"USDD","symbol":"USDD","rank":57,"is_new":false,"is_active":true,"type":"token"}];

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface CoinInterface {
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

function Coins() {
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     (async() => {
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);


    return (
        <Container>
            <Header>
                <Title>코인</Title>    
            </Header>    
            <CoinsList>
                {/* a tag refreshes the webpage thus we use "LINK"s */}
                {loading? (<Loader>Loading...</Loader>) : (coins.map((coin) => (
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
                    </Coin>)))}
            </CoinsList>
        </Container>
    );
}

export default Coins;
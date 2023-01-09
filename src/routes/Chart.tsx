import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart ({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  const chartData = data?.map((i) => {
    return {
        x: i.time_close,
        y: [i.open, i.high, i.low, i.close],
    };
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData? chartData : [],
            }
        ]}
        options={{
          theme: {
            mode: isDark? "dark": "light",
          },
          chart: {
            type: "candlestick",
            height: 350,
            width: 500,
            toolbar: {
              show:false,
            },
            background: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: data?.map((price) => price.time_close),
            labels: {
              style: {
                colors: '#9c88ff'
              }
            }
          },
        }}
        />
      )}
    </div>
  );
}

export default Chart;

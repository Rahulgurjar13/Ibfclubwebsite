import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CryptoGraphs = () => {
  const [btcData, setBtcData] = useState(null);
  const [ethData, setEthData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [priceChanges, setPriceChanges] = useState({ btc: 0, eth: 0 });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#fff',
          font: { size: 14, weight: 'bold', family: "'Poppins', sans-serif" },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: { display: false },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#FF5722',
        titleFont: { size: 16, weight: 'bold', family: "'Poppins', sans-serif" },
        bodyColor: '#fff',
        bodyFont: { size: 14, family: "'Poppins', sans-serif" },
        borderColor: '#FF5722',
        borderWidth: 2,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => `Price: $${context.parsed.y.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
          title: (tooltipItems) => tooltipItems[0].label,
        },
      },
    },
    scales: {
      x: {
        display: true,
        ticks: { 
          color: 'rgba(255, 255, 255, 0.7)', 
          font: { size: 12, family: "'Poppins', sans-serif" },
          maxRotation: 0,
        },
        grid: { display: false, drawBorder: false },
      },
      y: {
        display: true,
        position: 'right',
        beginAtZero: false,
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 12, family: "'Poppins', sans-serif" },
          callback: value => `$${value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`,
          count: 5,
        },
        grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
      },
    },
    elements: {
      line: { borderWidth: 3, tension: 0.4 },
      point: { radius: 0, hoverRadius: 6 },
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
  };

  const fetchCryptoData = async () => {
    try {
      setIsRefreshing(true);
      setError(null);

      const interval = '1d';
      const limit = parseInt(timeRange);
      const endTime = Date.now();
      const startTime = endTime - (limit * 24 * 60 * 60 * 1000);

      const btcResponse = await axios.get(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`
      );

      const ethResponse = await axios.get(
        `https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=${interval}&limit=${limit}&startTime=${startTime}&endTime=${endTime}`
      );

      const marketResponse = await axios.get(
        'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT"]'
      );

      const btcPrices = btcResponse.data.map(kline => parseFloat(kline[4]));
      const ethPrices = ethResponse.data.map(kline => parseFloat(kline[4]));

      const btcChange = ((btcPrices[btcPrices.length - 1] - btcPrices[0]) / btcPrices[0]) * 100;
      const ethChange = ((ethPrices[ethPrices.length - 1] - ethPrices[0]) / ethPrices[0]) * 100;

      setPriceChanges({
        btc: btcChange.toFixed(2),
        eth: ethChange.toFixed(2),
      });

      const btcChartData = {
        labels: btcResponse.data.map(kline => 
          new Date(parseInt(kline[0])).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        ),
        datasets: [{
          label: 'BTC Price',
          data: btcPrices,
          borderColor: '#FF5722',
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) return 'rgba(255, 87, 34, 0.3)';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(255, 87, 34, 0)');
            gradient.addColorStop(1, 'rgba(255, 87, 34, 0.3)');
            return gradient;
          },
          fill: 'start',
          tension: 0.4,
          pointBackgroundColor: '#FF5722',
        }],
      };

      const ethChartData = {
        labels: ethResponse.data.map(kline => 
          new Date(parseInt(kline[0])).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        ),
        datasets: [{
          label: 'ETH Price',
          data: ethPrices,
          borderColor: '#FFA000',
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) return 'rgba(255, 160, 0, 0.3)';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(255, 160, 0, 0)');
            gradient.addColorStop(1, 'rgba(255, 160, 0, 0.3)');
            return gradient;
          },
          fill: 'start',
          tension: 0.4,
          pointBackgroundColor: '#FFA000',
        }],
      };

      const btcMarketCap = parseFloat(marketResponse.data[0].quoteVolume);
      const ethMarketCap = parseFloat(marketResponse.data[1].quoteVolume);
      const totalMarketCap = btcMarketCap + ethMarketCap;

      const marketCapData = {
        labels: ['Total Market Cap'],
        datasets: [{
          label: 'Market Cap (USD)',
          data: [totalMarketCap],
          borderColor: '#E65100',
          backgroundColor: 'rgba(230, 81, 0, 0.6)',
          borderWidth: 2,
          borderRadius: 8,
          barThickness: 40,
        }],
      };

      setBtcData(btcChartData);
      setEthData(ethChartData);
      setMarketData(marketCapData);
      setIsLoading(false);
      setIsRefreshing(false);

    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setError('Failed to load data. Please try again later.');
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 300000);
    
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(fontLink);
    };
  }, [timeRange]);

  const styles = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(10deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
    @keyframes slideIn { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
    @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #121212;
      color: #ffffff;
      margin: 0;
    }

    .animate-float { animation: float 8s ease-in-out infinite; }
    .crypto-card {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: linear-gradient(145deg, rgba(32, 32, 32, 0.9), rgba(24, 24, 24, 0.95));
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 87, 34, 0.1);
      position: relative;
      z-index: 1;
      overflow: hidden;
      animation: slideIn 0.8s ease-out forwards;
    }

    .crypto-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 87, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
      opacity: 0;
      transition: opacity 0.6s ease;
      z-index: -1;
      pointer-events: none;
    }

    .crypto-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 30px -10px rgba(255, 87, 34, 0.2);
      border: 1px solid rgba(255, 87, 34, 0.3);
    }

    .crypto-card:hover::before { opacity: 1; }

    .time-range-button {
      background: rgba(35, 35, 35, 0.8);
      border: 1px solid rgba(255, 87, 34, 0.2);
      border-radius: 6px;
      color: rgba(255, 255, 255, 0.7);
      padding: 0.4rem 1rem;
      margin: 0 0.25rem;
      font-size: 0.85rem;
      transition: all 0.3s ease;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
    }

    .time-range-button:hover { border-color: rgba(255, 87, 34, 0.6); color: #fff; }
    .time-range-button.active {
      background: linear-gradient(135deg, #FF5722, #FF8A65);
      color: #fff;
      border: 1px solid transparent;
      box-shadow: 0 4px 8px rgba(255, 87, 34, 0.3);
    }

    .price-change {
      padding: 0.3rem 0.8rem;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      animation: fadeIn 0.5s ease-out;
    }

    .price-change.positive { background: rgba(46, 125, 50, 0.2); color: #4CAF50; }
    .price-change.negative { background: rgba(198, 40, 40, 0.2); color: #F44336; }
    .refresh-button {
      background: rgba(255, 87, 34, 0.1);
      border: 1px solid rgba(255, 87, 34, 0.3);
      color: #FF5722;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .refresh-button:hover { background: rgba(255, 87, 34, 0.2); transform: rotate(30deg); }
    .refresh-button.refreshing { animation: rotate 1.5s linear infinite; }
    @keyframes rotate { 100% { transform: rotate(360deg); } }

    .shimmer-loading {
      background: linear-gradient(90deg, rgba(40, 40, 40, 0.6) 25%, rgba(60, 60, 60, 0.6) 50%, rgba(40, 40, 40, 0.6) 75%);
      background-size: 1000px 100%;
      animation: shimmer 2s infinite linear;
      border-radius: 8px;
    }

    .coin-icon {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btc-icon { background: rgba(255, 87, 34, 0.15); color: #FF5722; }
    .eth-icon { background: rgba(255, 160, 0, 0.15); color: #FFA000; }
    .market-icon { background: rgba(230, 81, 0, 0.15); color: #E65100; }
  `;

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    return () => document.head.removeChild(styleSheet);
  }, []);

  const renderChart = () => {
    if (activeTab === 'all') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 crypto-card bg-gray-900 p-6 rounded-xl shadow-lg" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="coin-icon btc-icon">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 11.5V8.5H9.5V6.5H11.5V3.5H13.5V6.5H15V8.5H13.5V11.5H15.5C16.05 11.5 16.5 11.95 16.5 12.5V14.5C16.5 15.05 16.05 15.5 15.5 15.5H13.5V20.5H11.5V15.5H9.5V13.5H11.5V11.5ZM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold">Bitcoin (BTC)</h4>
                  <div className="text-sm text-gray-400">Last {timeRange} days performance</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                {btcData && btcData.datasets[0].data.length > 0 && (
                  <>
                    <div className="text-xl font-bold text-white">
                      ${btcData.datasets[0].data[btcData.datasets[0].data.length - 1].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`price-change mt-1 ${parseFloat(priceChanges.btc) >= 0 ? 'positive' : 'negative'}`}>
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        {parseFloat(priceChanges.btc) >= 0 ? (
                          <path d="M7 14l5-5 5 5H7z" />
                        ) : (
                          <path d="M7 10l5 5 5-5H7z" />
                        )}
                      </svg>
                      {parseFloat(priceChanges.btc) >= 0 ? '+' : ''}{priceChanges.btc}%
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-72">
              {btcData ? <Line data={btcData} options={chartOptions} /> : <div className="h-full shimmer-loading"></div>}
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="coin-icon eth-icon">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75ZM5.75 13.5L12 22.25L18.25 13.5L12 17.25L5.75 13.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Ethereum (ETH)</h4>
                  </div>
                </div>
                <div className={`price-change ${parseFloat(priceChanges.eth) >= 0 ? 'positive' : 'negative'}`}>
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    {parseFloat(priceChanges.eth) >= 0 ? (
                      <path d="M7 14l5-5 5 5H7z" />
                    ) : (
                      <path d="M7 10l5 5 5-5H7z" />
                    )}
                  </svg>
                  {parseFloat(priceChanges.eth) >= 0 ? '+' : ''}{priceChanges.eth}%
                </div>
              </div>
              <div className="h-40">
                {ethData ? (
                  <Line data={ethData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, legend: { display: false } } }} />
                ) : (
                  <div className="h-full shimmer-loading"></div>
                )}
              </div>
            </div>
            
            <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                <div className="coin-icon market-icon">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v7H3v-7zm4-7h2v14H7V6zm4 3h2v11h-2V9zm4 4h2v7h-2v-7zm4-7h2v14h-2V6z" />
                  </svg>
                </div>
                <h4 className="text-white text-lg font-semibold">Market Overview</h4>
              </div>
              {marketData && marketData.datasets[0].data.length > 0 ? (
                <div className="mt-4">
                  <div className="mb-2 text-gray-400 text-sm">24h Trading Volume</div>
                  <div className="text-white text-2xl font-bold">
                    ${(marketData.datasets[0].data[0] / 1e9).toFixed(2)} Billion
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full mt-3 mb-1">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              ) : (
                <div className="h-32 shimmer-loading"></div>
              )}
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'bitcoin') {
      return (
        <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="coin-icon btc-icon">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 11.5V8.5H9.5V6.5H11.5V3.5H13.5V6.5H15V8.5H13.5V11.5H15.5C16.05 11.5 16.5 11.95 16.5 12.5V14.5C16.5 15.05 16.05 15.5 15.5 15.5H13.5V20.5H11.5V15.5H9.5V13.5H11.5V11.5ZM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Bitcoin (BTC)</h4>
                <div className="text-sm text-gray-400">Detailed Analysis</div>
              </div>
            </div>
            <div className={`price-change ${parseFloat(priceChanges.btc) >= 0 ? 'positive' : 'negative'}`}>
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                {parseFloat(priceChanges.btc) >= 0 ? (
                  <path d="M7 14l5-5 5 5H7z" />
                ) : (
                  <path d="M7 10l5 5 5-5H7z" />
                )}
              </svg>
              {parseFloat(priceChanges.btc) >= 0 ? '+' : ''}{priceChanges.btc}%
            </div>
          </div>
          <div className="h-96">
            {btcData ? <Line data={btcData} options={chartOptions} /> : <div className="h-full shimmer-loading"></div>}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Current Price</div>
              <div className="text-white text-xl font-bold mt-1">
                ${btcData && btcData.datasets[0].data.length > 0 ? 
                  btcData.datasets[0].data[btcData.datasets[0].data.length - 1].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">High</div>
              <div className="text-green-500 text-xl font-bold mt-1">
                ${btcData && btcData.datasets[0].data.length > 0 ? 
                  Math.max(...btcData.datasets[0].data).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Low</div>
              <div className="text-red-600 text-xl font-bold mt-1">
                ${btcData && btcData.datasets[0].data.length > 0 ? 
                  Math.min(...btcData.datasets[0].data).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'ethereum') {
      return (
        <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="coin-icon eth-icon">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75ZM5.75 13.5L12 22.25L18.25 13.5L12 17.25L5.75 13.5Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold">Ethereum (ETH)</h4>
                <div className="text-sm text-gray-400">Detailed Analysis</div>
              </div>
            </div>
            <div className={`price-change ${parseFloat(priceChanges.eth) >= 0 ? 'positive' : 'negative'}`}>
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                {parseFloat(priceChanges.eth) >= 0 ? (
                  <path d="M7 14l5-5 5 5H7z" />
                ) : (
                  <path d="M7 10l5 5 5-5H7z" />
                )}
              </svg>
              {parseFloat(priceChanges.eth) >= 0 ? '+' : ''}{priceChanges.eth}%
            </div>
          </div>
          <div className="h-96">
            {ethData ? <Line data={ethData} options={chartOptions} /> : <div className="h-full shimmer-loading"></div>}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Current Price</div>
              <div className="text-white text-xl font-bold mt-1">
                ${ethData && ethData.datasets[0].data.length > 0 ? 
                  ethData.datasets[0].data[ethData.datasets[0].data.length - 1].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">High</div>
              <div className="text-green-500 text-xl font-bold mt-1">
                ${ethData && ethData.datasets[0].data.length > 0 ? 
                  Math.max(...ethData.datasets[0].data).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <div className="text-gray-400 text-sm">Low</div>
              <div className="text-red-600 text-xl font-bold mt-1">
                ${ethData && ethData.datasets[0].data.length > 0 ? 
                  Math.min(...ethData.datasets[0].data).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 
                  "0.00"}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'market') {
      return (
        <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="coin-icon market-icon">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v7H3v-7zm4-7h2v14H7V6zm4 3h2v11h-2V9zm4 4h2v7h-2v-7zm4-7h2v14h-2V6z" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-semibold">Global Crypto Market</h4>
          </div>
          {marketData && marketData.datasets[0].data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-5 rounded-xl">
                <div className="text-gray-400 mb-2">24h Trading Volume</div>
                <div className="text-white text-3xl font-bold">
                  ${(marketData.datasets[0].data[0] / 1e9).toFixed(2)} Billion
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full mt-4 mb-1">
                  <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 shimmer-loading"></div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="py-12 bg-black text-gray-300 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 10}s`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: `rgba(${255 * Math.random()}, ${87 * Math.random()}, ${34 * Math.random()}, ${0.4 + Math.random() * 0.3})`,
                borderRadius: '50%',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 87, 34, ${0.3 + Math.random() * 0.4})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 relative z-10">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-0 tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 text-transparent bg-clip-text">
              Crypto Dashboard
            </span>
          </h3>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-700">
              <button 
                className={`time-range-button ${timeRange === '1' ? 'active' : ''}`}
                onClick={() => setTimeRange('1')}
              >
                1D
              </button>
              <button 
                className={`time-range-button ${timeRange === '7' ? 'active' : ''}`}
                onClick={() => setTimeRange('7')}
              >
                7D
              </button>
              <button 
                className={`time-range-button ${timeRange === '30' ? 'active' : ''}`}
                onClick={() => setTimeRange('30')}
              >
                30D
              </button>
              <button 
                className={`time-range-button ${timeRange === '90' ? 'active' : ''}`}
                onClick={() => setTimeRange('90')}
              >
                90D
              </button>
            </div>
            
            <button 
              className={`refresh-button ${isRefreshing ? 'refreshing' : ''}`}
              onClick={() => fetchCryptoData()}
              disabled={isRefreshing}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-8 relative z-10 px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-1 bg-black rounded-xl p-2 sm:p-1 shadow-lg max-w-full overflow-x-auto">
            <button
              className={`w-full sm:w-auto text-sm sm:text-base font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 ${
                activeTab === 'all'
                  ? 'text-white font-semibold bg-orange-600'
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setActiveTab('all')}
            >
              Dashboard
            </button>
            <button
              className={`w-full sm:w-auto text-sm sm:text-base font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 ${
                activeTab === 'bitcoin'
                  ? 'text-white font-semibold bg-orange-600'
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setActiveTab('bitcoin')}
            >
              Bitcoin
            </button>
            <button
              className={`w-full sm:w-auto text-sm sm:text-base font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 ${
                activeTab === 'ethereum'
                   ? 'text-white font-semibold bg-orange-600'
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setActiveTab('ethereum')}
            >
              Ethereum
            </button>
          </div>
        </div>

        <div className="relative z-10">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-40 h-10 shimmer-loading"></div>
                  <div className="w-20 h-8 shimmer-loading"></div>
                </div>
                <div className="h-72 shimmer-loading"></div>
              </div>
              <div className="md:col-span-4 flex flex-col gap-8">
                <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="w-40 h-10 mb-4 shimmer-loading"></div>
                  <div className="h-40 shimmer-loading"></div>
                </div>
                <div className="crypto-card bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="w-40 h-10 mb-4 shimmer-loading"></div>
                  <div className="h-32 shimmer-loading"></div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            renderChart()
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoGraphs;
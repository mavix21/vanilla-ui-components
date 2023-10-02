const stocks = [
  {
    src: 'assets/shell.png',
    name: 'Shell plc',
    ticker: 'SHELL',
    price: 64.53,
    change: 0.45,
    marketCap: '215.6B',
    peRatio: 7.88,
    dividendYield: 4.08,
    volume: '5.2M',
  },
  {
    src: 'assets/shell.png',
    name: 'Shell plc',
    ticker: 'SHELL',
    price: 64.53,
    change: 0.45,
    marketCap: '215.6B',
    peRatio: 7.88,
    dividendYield: 4.08,
    volume: '5.2M',
  },
  {
    src: 'assets/shell.png',
    name: 'Shell plc',
    ticker: 'SHELL',
    price: 64.53,
    change: 0.45,
    marketCap: '215.6B',
    peRatio: 7.88,
    dividendYield: 4.08,
    volume: '5.2M',
  },
]

let tableRowCount = document.querySelector('.table-row-count');
tableRowCount.innerHTML = `(${stocks.length}) Stocks`;

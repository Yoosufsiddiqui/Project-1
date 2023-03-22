function CurrentRates({currencyData}) {
    const USD = currencyData.USD.rate_float.toFixed(3)
    const EUR = currencyData.EUR.rate_float.toFixed(3)
    const GBP = currencyData.GBP.rate_float.toFixed(3)
  
    return <div>
      <h2> 1 BTC = {USD} $ (USD) </h2>
      <h2> 1 BTC = {EUR} € (EUR) </h2>
      <h2> 1 BTC = {GBP} £ (GBP) </h2>
    </div>
  }
  
  export default CurrentRates;
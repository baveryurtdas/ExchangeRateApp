class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=HZqjjAn4UqHuLQL3GyBsUkehC81e7XqjxKOw1NBZ&base_currency=";
    }
  async exchange(amount,firstCurrency,SecondCurrency){
     const response = await fetch(`${this.url}${firstCurrency}`);
     const result = await response.json();
     const exchangeResult =  amount * result.data[SecondCurrency];
    return exchangeResult;
    }
}

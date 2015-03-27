angular.module('finance2', [])
	.factory('currencyConverter', function() {
		var currencies = ['USD', 'EUR', 'CNY'];
		var usdToRoreignRates = {
			USD:1,
			EUR: 0.74,
			CNY: 6.09
		};

		var convert = function(amount, inCurr, outCurr){
			return amount * usdToRoreignRates[outCurr] / usdToRoreignRates[inCurr];
		};

		return {
			currencies: currencies,
			convert: convert
		};
	});
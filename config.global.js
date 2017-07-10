'use strict';

var config = {};
config.bpl = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.exchangeRates = {exchanges: { BPL: {}, BTC: {}}};
config.marketWatcher = {exchanges: {}, candles: {}, orders: {}};

module.exports = config;

'use strict';

var config = require('./config.global');

// CONFIGURATION
// =======================================================================================

config.host = 'ec2-13-115-69-210.ap-northeast-1.compute.amazonaws.com'; // Interface to listen on, 0.0.0.0 to listen on all available
config.port = 9033;      // Port to listen on

// BPL node
config.bpl.host = '13.115.69.210';
config.bpl.port = 9032;

// FreeGeoIP server
config.freegeoip.host = '127.0.0.1';
config.freegeoip.port = 8080;

// Redis server
config.redis.host     = '127.0.0.1';
config.redis.port     = 6379;
config.redis.password = '';

config.cacheTTL = 20; // Time in seconds to store cache in Redis

// Header price tickers, Currency switcher
config.exchangeRates.enabled = true;         // Exchange rates support (true - enabled, false - disabled)
config.exchangeRates.updateInterval = 30000; // Interval in ms for checking exchange rates (default: 30 seconds)
// Configuration for different currency pairs, set false to disable pair
config.exchangeRates.exchanges.BPL.BTC = 'bittrex';  // BPL/BTC pair, supported: poloniex
config.exchangeRates.exchanges.BPL.CNY = 'jubi';      // BPL/CNY pair, supported: jubi, bitbays
config.exchangeRates.exchanges.BTC.USD = 'bitfinex';  // BTC/USD pair, supported: bitfinex, bitstamp, btce
config.exchangeRates.exchanges.BTC.EUR = 'bitstamp';  // BTC/EUR pair, supported: bitstamp, bitmarket
config.exchangeRates.exchanges.BTC.PLN = 'bitmarket'; // BTC/PLN pair, supported: bitmarket

// Market watcher
config.marketWatcher.enabled = true; // Market watcher support (true - enabled, false - disabled)
config.marketWatcher.exchanges.poloniex = true; // Poloniex exchange support (true - enabled, false - disabled)
config.marketWatcher.exchanges.bittrex  = false; // Bittrex exchange support (true - enabled, false - disabled)
config.marketWatcher.candles.updateInterval = 30000; // Interval in ms for updating candlestick data (default: 30 seconds)
config.marketWatcher.orders.updateInterval  = 15000;  // Interval in ms for updating order book data (default: 15 seconds)

// Delegate Proposals
config.proposals.enabled = false; // Delegate proposals support (true - enabled, false - disabled)
config.proposals.updateInterval = 600000; // Interval in ms for updating delegate proposals (default: 10 minutes)

// =======================================================================================

module.exports = config;

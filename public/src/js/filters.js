'use strict';

function smallId(fullId) {
  return fullId.slice(0, 5) + '...' + fullId.slice(-5)
}

angular.module('bpl_explorer')
  .filter('approval', function () {
      return function (votes) {
          if (isNaN(votes)) {
              return 0;
          } else {
              return ((parseInt(votes) / 10000000000000000) * 100).toFixed(2);
          }
      };
  })
  .filter('epochStamp', function () {
      return function (d) {
          return new Date(
              (((Date.UTC(2017,2,21,13,0,0,0) / 1000) + d) * 1000)
          );
      };
  })
  .filter('forgingTime', function () {
      return function (seconds) {
        if (seconds === 0) {
          return 'Now!';
        }
        var minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60);
        if (minutes && seconds) {
          return minutes + ' min ' + seconds + ' sec';
        } else if (minutes) {
          return minutes + ' min ';
        } else {
          return seconds + ' sec';
        }
      };
  })
  .filter('fiat', function () {
      return function (amount) {
          if (isNaN(amount)) {
              return (0).toFixed(2);
          } else {
              return (parseInt(amount) / 100000000).toFixed(2);
          }
      };
  })
  .filter('lisk', function () {
      return function (amount) {
          if (isNaN(amount)) {
              return (0).toFixed(8);
          } else {
              return (parseInt(amount) / 100000000).toFixed (8).replace (/\.?0+$/, '');
          }
      };
  })
  .filter('currency', function (numberFilter, liskFilter) {
    var decimal_places = 4;
      return function (amount, currency, decimal_places) {
        var lisk = liskFilter (amount),
            factor = 1;

        if (currency.tickers && currency.tickers.BPL && currency.tickers.BPL[currency.symbol]) {
          factor = currency.tickers.BPL[currency.symbol];
        } else if (currency.symbol !== 'BPL') {
          // Exchange rate not available for current symbol
          return 'N/A';
        }

        if (decimal_places === undefined) {
          switch (currency.symbol) {
            case 'BPL':
              return numberFilter ((lisk * factor), 4).replace (/\.?0+$/, '');
            case 'BTC':
              return numberFilter ((lisk * factor), 4).replace (/\.?0+$/, '');
            default:
              return numberFilter ((lisk * factor), 4).replace (/\.?0+$/, '');
          }
        } else {
          return numberFilter ((lisk * factor), decimal_places);
        }
      };
  })
  .filter('nethash', function () {
      return function (nethash) {
          if (nethash === 'f9b98b78d2012ba8fd75538e3569bbc071ce27f0f93414218bc34bc72bdeb3db') {
              return 'Testnet';
          } else if (nethash === '7bfb2815effb43592ccdd4fd0f657c082a7b318eed12f6396cc174d8578293c3')  {
              return 'Mainnet';
          } else {
              return 'Local';
          }
      };
  })
  .filter('round', function () {
      return function (height) {
          if (isNaN(height)) {
              return 0;
          } else {
              return Math.floor(height / 51) + (height % 51 > 0 ? 1 : 0);
          }
      };
  })
  .filter('split', function () {
      return function (input, delimiter) {
          delimiter = delimiter || ',';
          return input.split(delimiter);
      };
  })
  .filter('startFrom', function () {
      return function (input, start) {
          start = +start;
          return input.slice(start);
      };
  })
  .filter('supplyPercent', function () {
      return function (amount, supply) {
        var supply_check = (supply > 0);
          if (isNaN(amount) || !supply_check) {
            return (0).toFixed(2);
          }
          return (amount / supply * 100).toFixed(2);
      };
  })
  .filter('timeAgo', function (epochStampFilter) {
      return function (timestamp) {
          return moment(epochStampFilter(timestamp)).fromNow();
      };
  })
  .filter('timeSpan', function (epochStampFilter) {
      return function (a, b) {
        if (b > 0){
          return moment.duration(epochStampFilter(a) - epochStampFilter(b)).humanize();
        }
        else {
          return moment.duration((new Date().setDate(new Date().getDate() + 1)) - new Date()).humanize();
        }
      };
  })
  .filter('timestamp', function (epochStampFilter) {
      return function (timestamp) {
          var d     = epochStampFilter(timestamp);
          var month = d.getMonth() + 1;

          if (month < 10) {
              month = '0' + month;
          }

          var day = d.getDate();

          if (day < 10) {
              day = '0' + day;
          }

          var h = d.getHours();
          var m = d.getMinutes();
          var s = d.getSeconds();

          if (h < 10) {
              h = '0' + h;
          }

          if (m < 10) {
              m = '0' + m;
          }

          if (s < 10) {
              s = '0' + s;
          }

          return d.getFullYear() + '/' + month + '/' + day + ' ' + h + ':' + m + ':' + s;
      };
  })
    .filter('smallId', function () {
        return function (fullId) {
            return smallId(fullId)
        };
    })
    .filter('txSender', function (txTypes) {
        return function (tx) {
            if (tx.senderDelegate && tx.senderDelegate.username)
                return tx.senderDelegate.username
            if (tx.senderUsername)
                return tx.senderUsername
            if (tx.knownSender && tx.knownSender.owner)
                return tx.knownSender.owner

            return smallId(tx.senderId)
        };
    })
    .filter('txRecipient', function (txTypes) {
        return function (tx) {
            if (tx.type !== 0)
                return txTypes[parseInt(tx.type)]
            if (tx.recipientDelegate && tx.recipientDelegate.username)
                return tx.recipientDelegate.username
            if (tx.recipientUsername)
                return tx.recipientUsername
            if (tx.knownRecipient && tx.knownRecipient.owner)
                return tx.knownRecipient.owner

            return smallId(tx.recipientId)
        };
    })
  .filter('txType', function (txTypes) {
      return function (tx) {
          return txTypes[parseInt(tx.type)];
      };
  })
  .filter('votes', function () {
      return function (a) {
          return (a.username || (a.knowledge && a.knowledge.owner) || a.address);
      };
  }).filter('proposal', function ($sce) {
      return function (name, proposals) {
          var p = _.find (proposals, function (p) {
              return p.name === name.toLowerCase ();
          });
          if (p) {
              return $sce.trustAsHtml('<a class="glyphicon glyphicon-user" href="https://forum.lisk.io/viewtopic.php?f=48&t=' + p.topic + '" title="' + _.escape (p.description) + '" target="_blank"></a> ' + name);
          } else {
              return $sce.trustAsHtml(name);
          }
      };
  });

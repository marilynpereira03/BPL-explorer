'use strict';

var ForgingMonitor = function (forgingStatus, $http) {
    this.getStatus = function (delegate) {
        return forgingStatus(delegate);
    };

    this.getforgingTotals = function (delegates) {
        var cnt1 = _.countBy(delegates, function (d) {
            switch (d.forgingStatus.code) {
                case 0:
                case 3:
                    return 'forging';
                case 1:
                case 4:
                    return 'missedBlock';
                case 2:
                    return 'notForging';
                case 3:
                case 4:
                    return 'awaitingSlot';
                default:
                    return 'unprocessed';
            }
        });
        var cnt2 = _.countBy(delegates, function (d) {
            switch (d.forgingStatus.code) {
                case 3:
                case 4:
                    return 'awaitingSlot';
                default:
                    return 'unprocessed';
            }
        });

        cnt1.awaitingSlot = cnt2.awaitingSlot;
        return cnt1;
    };

    this.getForgingProgress = function (totals) {
        var unprocessed  = totals.unprocessed || 0;
            unprocessed += totals.staleStatus || 0;
        $http.get('../../../constants.json').success(function (data){
         if (unprocessed > 0) {
              return (data.delegates - unprocessed);
          } else {
              return data.delegates;
          }
        });
    };
};

angular.module('bpl_explorer.tools').service('forgingMonitor',
  function (forgingStatus, $http) {
  return new ForgingMonitor(forgingStatus,$http);
  });

const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mockScript = `
<script>
  window.google = {
    script: {
      run: new Proxy({}, {
        get: function(target, prop) {
          if (prop === 'withSuccessHandler') {
            return function(cb) {
              return new Proxy({}, {
                get: function(target2, prop2) {
                  if (prop2 === 'withFailureHandler') {
                    return function(fcb) {
                      return new Proxy({}, {
                        get: function(target3, prop3) {
                          return function(...args) {
                            setTimeout(() => {
                              try {
                                if (prop3 === 'getHotelName') cb("Hill View Eco Retreat");
                                else if (prop3 === 'getActiveCheckInRooms') cb([{roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'}]);
                                else if (prop3 === 'getAllMenuItems') cb([{itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},{itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}]);
                                else if (prop3 === 'getAllFoodOrders') cb([]);
                                else if (prop3 === 'addFoodOrder') { console.log("PAYLOAD_SENT", JSON.stringify(args[0])); cb({success: true, message: 'Added!'}); }
                                else if (prop3 === 'checkLogin') cb({success:true, username:args[0], role:'admin'});
                                else if (prop3 === 'getDashboardData') cb({todayCI:0, todayCO:0, occRooms:0, totalRooms:0, revMonth:0, recentArr:[], upcArr:[], roomStatuses:[]});
                                else cb([]);
                              } catch(e) { console.error(e); }
                            }, 10);
                          }
                        }
                      });
                    }
                  }
                  return function(...args) {
                    setTimeout(() => {
                      try {
                        if (prop2 === 'getHotelName') cb("Hill View Eco Retreat");
                        else if (prop2 === 'getActiveCheckInRooms') cb([{roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'}]);
                        else if (prop2 === 'getAllMenuItems') cb([{itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},{itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}]);
                        else if (prop2 === 'getAllFoodOrders') cb([]);
                        else if (prop2 === 'addFoodOrder') { console.log("PAYLOAD_SENT", JSON.stringify(args[0])); cb({success: true, message: 'Added!'}); }
                        else if (prop2 === 'checkLogin') cb({success:true, username:args[0], role:'admin'});
                        else if (prop2 === 'getDashboardData') cb({todayCI:0, todayCO:0, occRooms:0, totalRooms:0, revMonth:0, recentArr:[], upcArr:[], roomStatuses:[]});
                        else cb([]);
                      } catch(e) { console.error(e); }
                    }, 10);
                  }
                }
              });
            }
          }
          if (prop === 'withFailureHandler') {
            return function(fcb) {
              return new Proxy({}, {
                get: function(target2, prop2) {
                  if (prop2 === 'withSuccessHandler') {
                    return function(cb) {
                      return new Proxy({}, {
                        get: function(target3, prop3) {
                          return function(...args) {
                            setTimeout(() => {
                              try {
                                if (prop3 === 'getHotelName') cb("Hill View Eco Retreat");
                                else if (prop3 === 'getActiveCheckInRooms') cb([{roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'}]);
                                else if (prop3 === 'getAllMenuItems') cb([{itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},{itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}]);
                                else if (prop3 === 'getAllFoodOrders') cb([]);
                                else if (prop3 === 'addFoodOrder') { console.log("PAYLOAD_SENT", JSON.stringify(args[0])); cb({success: true, message: 'Added!'}); }
                                else if (prop3 === 'checkLogin') cb({success:true, username:args[0], role:'admin'});
                                else if (prop3 === 'getDashboardData') cb({todayCI:0, todayCO:0, occRooms:0, totalRooms:0, revMonth:0, recentArr:[], upcArr:[], roomStatuses:[]});
                                else cb([]);
                              } catch(e) { console.error(e); }
                            }, 10);
                          }
                        }
                      });
                    }
                  }
                  return function(...args) {
                    // ignore failure
                  }
                }
              });
            }
          }
          return function(...args) { console.log('Unhandled google.script.run call:', prop); }
        }
      })
    }
  };
</script>
`;

html = html.replace('</head>', mockScript + '</head>');
fs.writeFileSync('index_local.html', html);

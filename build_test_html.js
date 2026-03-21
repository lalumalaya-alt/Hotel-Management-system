const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mockScript = `
<script>
  localStorage.setItem('mri_session', JSON.stringify({user: "admin", role: "admin", loginTime: Date.now()}));
  window.google = {
    script: {
      run: {
        withSuccessHandler: function(cb) {
          this.successCb = cb;
          return this;
        },
        withFailureHandler: function(cb) {
          this.failureCb = cb;
          return this;
        },
        checkLogin: function(u, p) {
          const cb = this.successCb;
          setTimeout(() => { if(cb) cb({success: true, username: u, role: 'admin'}); }, 100);
          return this;
        },
        getInitialData: function() {
          const cb = this.successCb;
          setTimeout(() => { if(cb) cb({user: 'admin', role: 'admin', hotelName: 'Hill View Eco Retreat', currency: 'MVR'}); }, 100);
          return this;
        },
        getAllRooms: function() {
           const cb = this.successCb;
           setTimeout(() => {
            if(cb) cb([
                {roomNo: '101', roomType: 'Standard', roomRate: 1000, roomStatus: 'Available'},
                {roomNo: '102', roomType: 'Standard', roomRate: 1000, roomStatus: 'Available'},
                {roomNo: '103', roomType: 'Standard', roomRate: 1000, roomStatus: 'Booked'},
                {roomNo: '104', roomType: 'Deluxe', roomRate: 2000, roomStatus: 'Available'},
                {roomNo: '105', roomType: 'Deluxe', roomRate: 2000, roomStatus: 'Available'},
                {roomNo: '106', roomType: 'Suite', roomRate: 5000, roomStatus: 'Available'}
            ]);
          }, 100);
          return this;
        },
        getAllBookings: function() {
           const cb = this.successCb;
           setTimeout(() => { if(cb) cb([]); }, 100);
          return this;
        },
        getAllCheckIns: function() {
           const cb = this.successCb;
           setTimeout(() => { if(cb) cb([]); }, 100);
          return this;
        },
        getAllCustomers: function() {
           const cb = this.successCb;
           setTimeout(() => { if(cb) cb([]); }, 100);
          return this;
        },
        getDashboardData: function() {
          const cb = this.successCb;
          setTimeout(() => {
            if(cb) cb({allRoomsDetails: [], todayCheckIns: [], todayCheckOuts: [], recentBookings: []});
          }, 100);
          return this;
        }
      }
    }
  };
</script>
`;

html = html.replace('</head>', mockScript + '</head>');
fs.writeFileSync('test_index.html', html);
console.log('test_index.html created successfully.');

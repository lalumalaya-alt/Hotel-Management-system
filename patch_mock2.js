const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mockScript = `
<script>
  window.google = {
    script: {
      run: {
        withSuccessHandler: function(cb) {
           return {
             withFailureHandler: function(fcb) {
               return this.createProxy(cb, fcb);
             }.bind(this),
             ...this.createProxy(cb, null)
           }
        },
        withFailureHandler: function(fcb) {
           return {
             withSuccessHandler: function(cb) {
               return this.createProxy(cb, fcb);
             }.bind(this),
             ...this.createProxy(null, fcb)
           }
        },
        createProxy: function(cb, fcb) {
           return {
             getHotelName: function() { setTimeout(()=>cb("Hill View Eco Retreat"),10); },
             getActiveCheckInRooms: function() { setTimeout(()=>cb([{roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'}]),10); },
             getAllMenuItems: function() { setTimeout(()=>cb([{itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},{itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}]),10); },
             getAllFoodOrders: function() { setTimeout(()=>cb([]),10); },
             addFoodOrder: function(payload) { console.log("PAYLOAD_SENT " + JSON.stringify(payload)); setTimeout(()=>cb({success: true}), 10); },
             checkLogin: function(u,p) { setTimeout(()=>cb({success:true, username:u, role:'admin'}),10); }
           };
        }
      }
    }
  };
</script>
`;

html = html.replace('</head>', mockScript + '</head>');
html = html.replace(/const \[am,setAm\]=useState\(role==='admin'\?'dashboard':'bookings'\);/, "const [am,setAm]=useState('restaurant');");

fs.writeFileSync('index_local.html', html);

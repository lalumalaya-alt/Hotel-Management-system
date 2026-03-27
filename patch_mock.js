const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mockScript = `
<script>
  window.google = {
    script: {
      run: {
        withSuccessHandler: function(cb) { this.sh = cb; return this; },
        withFailureHandler: function(cb) { this.fh = cb; return this; },
        getHotelName: function() { const t=this; setTimeout(()=>t.sh("Hill View Eco Retreat"),10); return t;},
        getActiveCheckInRooms: function() { const t=this; setTimeout(()=>t.sh([{roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'}]),10); return t;},
        getAllMenuItems: function() { const t=this; setTimeout(()=>t.sh([{itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},{itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}]),10); return t;},
        getAllFoodOrders: function() { const t=this; setTimeout(()=>t.sh([]),10); return t;},
        addFoodOrder: function(payload) { console.log("PAYLOAD_SENT", JSON.stringify(payload)); const t=this; setTimeout(()=>t.sh({success: true}), 10); return t;}
      }
    }
  };
</script>
`;

html = html.replace('</head>', mockScript + '</head>');
// Override default layout page
html = html.replace(/const \[am,setAm\]=useState\(role==='admin'\?'dashboard':'bookings'\);/, "const [am,setAm]=useState('restaurant');");

fs.writeFileSync('index_local.html', html);

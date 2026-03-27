const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mockScript = `
<script>
  window.google = {
    script: {
      run: {
        withSuccessHandler: function(callback) {
          this.successHandler = callback;
          return this;
        },
        withFailureHandler: function(callback) {
          this.failureHandler = callback;
          return this;
        },
        getHotelName: function() { setTimeout(() => Object.getPrototypeOf(this).successHandler("Hill View Eco Retreat"), 100); },
        checkLogin: function(u, p) { setTimeout(() => Object.getPrototypeOf(this).successHandler({success:true, username:u, role:'admin'}), 100); },
        getDashboardData: function() {
          setTimeout(() => Object.getPrototypeOf(this).successHandler({
            todayCI: 2, todayCO: 1, occRooms: 5, totalRooms: 20, revMonth: 50000,
            recentArr: [], upcArr: [], roomStatuses: [
               {roomNo: '101', type: 'Deluxe', status: 'Booked'},
               {roomNo: '102', type: 'Deluxe', status: 'Available'}
            ]
          }), 100);
        },
        getActiveCheckInRooms: function() {
          setTimeout(() => Object.getPrototypeOf(this).successHandler([
            {roomNo: '101', guestName: 'John Doe', checkInId: 'CI-100'},
            {roomNo: '205', guestName: 'Jane Smith', checkInId: 'CI-101'},
            {roomNo: '302', guestName: 'Bob Builder', checkInId: 'CI-102'}
          ]), 100);
        },
        getAllMenuItems: function() {
          setTimeout(() => Object.getPrototypeOf(this).successHandler([
            {itemName: 'Grilled Fish', category: 'Food', defaultPrice: 150},
            {itemName: 'Lemonade', category: 'Beverage', defaultPrice: 45}
          ]), 100);
        },
        getAllFoodOrders: function() {
          setTimeout(() => Object.getPrototypeOf(this).successHandler([
            {rowIndex: 2, orderId: 'REST-001', roomNo: '101', checkInId: 'CI-100', orderDate: '2026-03-26', mealPeriod: 'Dinner', itemName: 'Grilled Fish', quantity: 1, rate: 150, totalAmount: 150, status: 'Active', addedBy: 'admin'}
          ]), 100);
        },
        addFoodOrder: function(payload) {
          console.log("Mock addFoodOrder payload:", JSON.stringify(payload));
          setTimeout(() => Object.getPrototypeOf(this).successHandler({success: true, message: "Order added"}), 100);
        }
      }
    }
  };

  // Ensure that withSuccessHandler correctly chains
  window.google.script.run = new Proxy(window.google.script.run, {
      get: function(target, prop) {
          if (typeof target[prop] === 'function') {
              return function(...args) {
                  let callObj = Object.create(target);
                  return target[prop].apply(callObj, args);
              }
          }
          return target[prop];
      }
  });

</script>
`;

// Insert the mock script before </head>
html = html.replace('</head>', mockScript + '</head>');

// Force the initial menu to be 'restaurant'
html = html.replace(/const \[am,setAm\]=useState\('dashboard'\);/g, "const [am,setAm]=useState('restaurant');");
html = html.replace(/const \[activeMenu, setActiveMenu\] = useState\('dashboard'\);/g, "const [activeMenu, setActiveMenu] = useState('restaurant');");

// Ensure App renders it if the previous line failed
// We'll just patch the default state inside Layout
html = html.replace("const [am,setAm]=useState('dashboard');", "const [am,setAm]=useState('restaurant');");

fs.writeFileSync('index_local.html', html, 'utf8');
console.log('Created index_local.html');

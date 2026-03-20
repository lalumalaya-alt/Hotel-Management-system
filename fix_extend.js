const fs = require('fs');

// We need an endpoint to fetch available rooms without strict date logic if none exists.
// Code.gs currently checks status directly from the 'Rooms' sheet in `addCheckIn`.
// So extending a checkout date doesn't actually require a date-based room availability check
// because there is no date-based booking logic in the base version.
// It literally just changes the check-out date on the check-in record.

// Let's modify index.html to add an Edit Check-In modal

let html = fs.readFileSync('index.html', 'utf8');

const tableDef = `
      const initT=(data)=>{if(tRef.current){try{tRef.current.destroy();tRef.current=null;$('#ciT').empty();}catch(e){}}
        setTimeout(()=>{try{const t=$('#ciT').DataTable({data,destroy:true,columns:[
          {data:'checkInId',title:'ID'},{data:'guestName',title:'Guest'},{data:'roomNumbers',title:'Rooms'},{data:'mobile',title:'Phone'},
          {data:'checkInDate',title:'Check-In',render:d=>fmtDate(d)},{data:'checkOutDate',title:'Expected Out',render:d=>d?fmtDate(d):'-'},
          {data:'pax',title:'Pax'},{data:'status',title:'Status',render:d=>'<span class="status-badge status-'+(d||'active').toLowerCase().replace(/\\s+/g,'-')+'">'+d+'</span>'},
          {data:null,title:'Actions',orderable:false,className:'all',responsivePriority:1,render:(d,tp,row)=>{
              if((row.status||'').toLowerCase()==='active'){
                  return '<button class="action-icon edit-icon" data-action="edit" title="Edit Options"><i class="fas fa-edit"></i></button>';
              }
              return '-';
          }}
        ],pageLength:10,responsive:true,dom:'Blfrtip',buttons:[
          {extend:'csv',text:'<i class="fas fa-file-csv"></i> CSV',exportOptions:{columns:':not(:last-child)'}},
          {extend:'pdf',text:'<i class="fas fa-file-pdf"></i> PDF',exportOptions:{columns:':not(:last-child)'}},
          {extend:'print',text:'<i class="fas fa-print"></i> Print',exportOptions:{columns:':not(:last-child)'}}
        ],order:[[0,'desc']]});

        $('#ciT').off('click','.action-icon').on('click','.action-icon',function(){
            const a=$(this).data('action');
            const tr=$(this).closest('tr');
            const rd=t.row(tr.hasClass('child')?tr.prev():tr).data();
            if(a==='edit'){
                setEditCheckIn(rd);
                setShowEditModal(true);
            }
        });

        tRef.current=t;}catch(e){console.error(e);}},150);};
`;

html = html.replace(/const initT=\(data\)=>\{if\(tRef\.current\)\{try\{tRef\.current\.destroy\(\);tRef\.current=null;\$\('#ciT'\)\.empty\(\);\}catch\(e\)\{\}\}[\s\S]*?150\);\};/, tableDef);

// Insert state
html = html.replace('const [searchQ,setSearchQ]=React.useState(\'\');', 'const [searchQ,setSearchQ]=React.useState(\'\');\n      const [editCheckIn, setEditCheckIn] = React.useState(null);\n      const [showEditModal, setShowEditModal] = React.useState(false);');


fs.writeFileSync('index.html', html);
console.log("Updated check-in table logic in index.html");

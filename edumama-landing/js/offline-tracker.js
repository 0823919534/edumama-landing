(function(){
  const form = document.getElementById('pilotForm');
  const msg = document.getElementById('pilotMsg');
  const exportBtn = document.getElementById('exportBtn');
  const clearBtn = document.getElementById('clearBtn');
  const statusText = document.getElementById('statusText');

  const STORAGE_KEY = 'edumama_pilot_data';

  function readData(){
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { signups: [], progress: [] };
  }
  function saveData(obj){ localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }

  // handle pilot form
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const formData = new FormData(form);
      const entry = {
        name: formData.get('name').trim(),
        phone: formData.get('phone').trim(),
        grade: formData.get('grade'),
        joinedAt: new Date().toISOString()
      };
      const data = readData();
      data.signups.push(entry);
      saveData(data);
      form.reset();
      if(msg) msg.textContent = 'Thanks — sign-up saved locally. We will contact you via WhatsApp.';
    });
  }

  // export CSV
  if(exportBtn){
    exportBtn.addEventListener('click', ()=>{
      const data = readData();
      const rows = [];
      data.signups.forEach(s=>{
        rows.push({
          type: 'signup',
          name: s.name,
          phone: s.phone,
          grade: s.grade,
          joinedAt: s.joinedAt
        });
      });
      data.progress.forEach(p=>{
        rows.push(Object.assign({type:'progress'}, p));
      });
      if(rows.length===0){ alert('No local data to export.'); return; }
      const keys = Object.keys(rows[0]);
      const csv = [keys.join(',')].concat(rows.map(r => keys.map(k => JSON.stringify(r[k]||'')).join(','))).join('\n');
      const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url;
      a.download = `edumama_export_${(new Date()).toISOString().slice(0,10)}.csv`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
  }

  // clear local data
  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      if(!confirm('Clear all local pilot data on this device? This cannot be undone.')) return;
      localStorage.removeItem(STORAGE_KEY);
      alert('Local data cleared.');
    });
  }

  // online/offline status
  function updateOnlineStatus(){ if(statusText) statusText.textContent = navigator.onLine ? 'Online' : 'Offline'; }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Expose small API for grade-r.html to record progress
  window.EduMamaLocal = {
    addProgress: function(progressObj){
      const data = readData();
      data.progress = data.progress || [];
      data.progress.push(progressObj);
      saveData(data);
    },
    getAll: readData
  };

})();

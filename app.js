const { useState, useEffect, useMemo, useRef, createContext, useContext } = React;
const { createElement: h } = React;

// ===== ICONS =====
const I = ({ n, s = 20, w = 2, c = "" }) => {
  const icons = {
    home: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
      h('polyline', { points: "9 22 9 12 15 12 15 22" })),
    calendar: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('rect', { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
      h('line', { x1: "16", y1: "2", x2: "16", y2: "6" }),
      h('line', { x1: "8", y1: "2", x2: "8", y2: "6" }),
      h('line', { x1: "3", y1: "10", x2: "21", y2: "10" })),
    users: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      h('circle', { cx: "9", cy: "7", r: "4" }),
      h('path', { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
      h('path', { d: "M16 3.13a4 4 0 0 1 0 7.75" })),
    scissors: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('circle', { cx: "6", cy: "6", r: "3" }),
      h('path', { d: "M8.12 8.12 12 12" }),
      h('path', { d: "M20 4 8.12 15.88" }),
      h('circle', { cx: "6", cy: "18", r: "3" }),
      h('path', { d: "M14.8 14.8 20 20" })),
    image: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
      h('circle', { cx: "8.5", cy: "8.5", r: "1.5" }),
      h('polyline', { points: "21 15 16 10 5 21" })),
    video: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "m22 8-6 4 6 4V8Z" }),
      h('rect', { x: "2", y: "6", width: "14", height: "12", rx: "2" })),
    wallet: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }),
      h('path', { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }),
      h('path', { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })),
    settings: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
      h('circle', { cx: "12", cy: "12", r: "3" })),
    menu: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('line', { x1: "4", y1: "12", x2: "20", y2: "12" }),
      h('line', { x1: "4", y1: "6", x2: "20", y2: "6" }),
      h('line', { x1: "4", y1: "18", x2: "20", y2: "18" })),
    bell: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
      h('path', { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })),
    search: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('circle', { cx: "11", cy: "11", r: "8" }),
      h('line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })),
    plus: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('line', { x1: "12", y1: "5", x2: "12", y2: "19" }),
      h('line', { x1: "5", y1: "12", x2: "19", y2: "12" })),
    chevronLeft: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('polyline', { points: "15 18 9 12 15 6" })),
    chevronRight: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('polyline', { points: "9 18 15 12 9 6" })),
    clock: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('circle', { cx: "12", cy: "12", r: "10" }),
      h('polyline', { points: "12 6 12 12 16 14" })),
    user: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      h('circle', { cx: "12", cy: "7", r: "4" })),
    phone: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })),
    mail: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
      h('path', { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })),
    trash2: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M3 6h18" }),
      h('path', { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
      h('path', { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
      h('line', { x1: "10", y1: "11", x2: "10", y2: "17" }),
      h('line', { x1: "14", y1: "11", x2: "14", y2: "17" })),
    edit3: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M12 20h9" }),
      h('path', { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })),
    trendingUp: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('polyline', { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
      h('polyline', { points: "17 6 23 6 23 12" })),
    trendingDown: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('polyline', { points: "23 18 13.5 8.5 8.5 13.5 1 6" }),
      h('polyline', { points: "17 18 23 18 23 12" })),
    download: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      h('polyline', { points: "7 10 12 15 17 10" }),
      h('line', { x1: "12", y1: "15", x2: "12", y2: "3" })),
    upload: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      h('polyline', { points: "17 8 12 3 7 8" }),
      h('line', { x1: "12", y1: "3", x2: "12", y2: "15" })),
    moon: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" })),
    sun: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('circle', { cx: "12", cy: "12", r: "5" }),
      h('line', { x1: "12", y1: "1", x2: "12", y2: "3" }),
      h('line', { x1: "12", y1: "21", x2: "12", y2: "23" }),
      h('line', { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
      h('line', { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
      h('line', { x1: "1", y1: "12", x2: "3", y2: "12" }),
      h('line', { x1: "21", y1: "12", x2: "23", y2: "12" }),
      h('line', { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
      h('line', { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })),
    monitor: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('rect', { x: "2", y: "3", width: "20", height: "14", rx: "2" }),
      h('line', { x1: "8", y1: "21", x2: "16", y2: "21" }),
      h('line', { x1: "12", y1: "17", x2: "12", y2: "21" })),
    alertTriangle: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
      h('line', { x1: "12", y1: "9", x2: "12", y2: "13" }),
      h('line', { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
    pieChart: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('path', { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
      h('path', { d: "M22 12A10 10 0 0 0 12 2v10z" })),
    play: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "currentColor", stroke: "none", className: c },
      h('polygon', { points: "5 3 19 12 5 21 5 3" })),
    sliders: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('line', { x1: "4", y1: "21", x2: "4", y2: "14" }),
      h('line', { x1: "4", y1: "10", x2: "4", y2: "3" }),
      h('line', { x1: "12", y1: "21", x2: "12", y2: "12" }),
      h('line', { x1: "12", y1: "8", x2: "12", y2: "3" }),
      h('line', { x1: "20", y1: "21", x2: "20", y2: "16" }),
      h('line', { x1: "20", y1: "12", x2: "20", y2: "3" }),
      h('line', { x1: "1", y1: "14", x2: "7", y2: "14" }),
      h('line', { x1: "9", y1: "8", x2: "15", y2: "8" }),
      h('line', { x1: "17", y1: "16", x2: "23", y2: "16" })),
    x: h('svg', { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", className: c },
      h('line', { x1: "18", y1: "6", x2: "6", y2: "18" }),
      h('line', { x1: "6", y1: "6", x2: "18", y2: "18" })),
  };
  return icons[n] || null;
};

// ===== HELPERS =====
const genId = () => Math.random().toString(36).slice(2, 15) + Math.random().toString(36).slice(2, 15);
const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
const fmtCur = (a, c) => (a || 0).toLocaleString('ru-RU') + ' ' + (c || '₽');
const fmtDur = (m) => { const h = Math.floor(m / 60); const mm = m % 60; return h > 0 ? h + 'ч ' + (mm > 0 ? mm + 'мин' : '') : m + 'мин'; };
const fmtDate = (d) => {
  const today = new Date().toISOString().split('T')[0];
  const tmr = new Date(Date.now() + 864e5).toISOString().split('T')[0];
  if (d === today) return 'Сегодня';
  if (d === tmr) return 'Завтра';
  const [y, m, day] = d.split('-');
  const months = ['','янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  return (+day) + ' ' + months[+m];
};
const fmtDateFull = (d) => { const [y, m, day] = d.split('-'); const months = ['','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']; return (+day) + ' ' + months[+m] + ' ' + y; };
const stColor = { scheduled: 'status-scheduled', completed: 'status-completed', cancelled: 'status-cancelled', 'no-show': 'status-no-show' };
const monthsRu = ['','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

// ===== STORAGE =====
const SK = 'lashmaster-pro-v1';
let _memStorage = null;
let _storageAvailable = false;
try {
  localStorage.setItem('__test__', '1');
  localStorage.removeItem('__test__');
  _storageAvailable = true;
} catch (e) {
  _storageAvailable = false;
}
const loadD = () => {
  try {
    if (_storageAvailable) { const d = localStorage.getItem(SK); return d ? JSON.parse(d) : null; }
    return _memStorage;
  } catch { return _memStorage; }
};
const saveD = (d) => {
  try {
    _memStorage = JSON.parse(JSON.stringify(d));
    if (_storageAvailable) localStorage.setItem(SK, JSON.stringify(d));
  } catch (e) {}
};

// ===== DEMO DATA =====
const defSvcs = [
  { id: genId(), name: 'Классика', duration: 120, price: 2500, description: 'Классическое наращивание', color: '#007aff' },
  { id: genId(), name: '2D Объём', duration: 150, price: 3000, description: 'Двойной объём', color: '#34c759' },
  { id: genId(), name: '3D Объём', duration: 180, price: 3500, description: 'Тройной объём', color: '#af52de' },
  { id: genId(), name: 'Снятие', duration: 30, price: 500, description: 'Снятие ресниц', color: '#ff3b30' },
  { id: genId(), name: 'Коррекция', duration: 90, price: 2000, description: 'Коррекция', color: '#ff9500' },
];
const defSet = { currency: '₽', theme: 'dark', notifications: true, workingHours: { start: '09:00', end: '20:00' } };
const initSt = { clients: [], appointments: [], services: defSvcs, transactions: [], photos: [], videos: [], settings: defSet };

// ===== STORE =====
const createStore = (init) => {
  let state = Object.assign({}, init);
  const ls = new Set();
  const getState = () => state;
  const setState = (fn) => { state = fn(state); saveD(state); ls.forEach(l => l(state)); };
  const subscribe = (l) => { ls.add(l); return () => ls.delete(l); };
  return { getState, setState, subscribe };
};
const store = createStore(loadD() || initSt);
const useStore = (sel) => {
  const [v, setV] = useState(() => sel(store.getState()));
  useEffect(() => store.subscribe(s => setV(sel(s))), [sel]);
  return v;
};
const useActions = () => ({
  addClient: (c) => store.setState(s => Object.assign({}, s, { clients: [...s.clients, Object.assign({}, c, { id: genId(), createdAt: new Date().toISOString() })] })),
  updateClient: (id, u) => store.setState(s => Object.assign({}, s, { clients: s.clients.map(c => c.id === id ? Object.assign({}, c, u) : c) })),
  deleteClient: (id) => store.setState(s => Object.assign({}, s, { clients: s.clients.filter(c => c.id !== id), appointments: s.appointments.filter(a => a.clientId !== id) })),
  addAppt: (a) => store.setState(s => Object.assign({}, s, { appointments: [...s.appointments, Object.assign({}, a, { id: genId() })] })),
  updateAppt: (id, u) => store.setState(s => Object.assign({}, s, { appointments: s.appointments.map(a => a.id === id ? Object.assign({}, a, u) : a) })),
  deleteAppt: (id) => store.setState(s => Object.assign({}, s, { appointments: s.appointments.filter(a => a.id !== id) })),
  addSvc: (sv) => store.setState(s => Object.assign({}, s, { services: [...s.services, Object.assign({}, sv, { id: genId() })] })),
  updateSvc: (id, u) => store.setState(s => Object.assign({}, s, { services: s.services.map(sv => sv.id === id ? Object.assign({}, sv, u) : sv) })),
  deleteSvc: (id) => store.setState(s => Object.assign({}, s, { services: s.services.filter(sv => sv.id !== id) })),
  addTx: (t) => store.setState(s => Object.assign({}, s, { transactions: [...s.transactions, Object.assign({}, t, { id: genId() })] })),
  deleteTx: (id) => store.setState(s => Object.assign({}, s, { transactions: s.transactions.filter(t => t.id !== id) })),
  addPhoto: (p) => store.setState(s => Object.assign({}, s, { photos: [...s.photos, Object.assign({}, p, { id: genId(), createdAt: new Date().toISOString() })] })),
  deletePhoto: (id) => store.setState(s => Object.assign({}, s, { photos: s.photos.filter(p => p.id !== id) })),
  addVideo: (v) => store.setState(s => Object.assign({}, s, { videos: [...s.videos, Object.assign({}, v, { id: genId() })] })),
  deleteVideo: (id) => store.setState(s => Object.assign({}, s, { videos: s.videos.filter(v => v.id !== id) })),
  updateSet: (u) => store.setState(s => Object.assign({}, s, { settings: Object.assign({}, s.settings, u) })),
  reset: () => store.setState(() => Object.assign({}, initSt)),
});

// ===== THEME =====
const ThemeCtx = createContext({ theme: 'dark', setTheme: () => {} });
const useTheme = () => useContext(ThemeCtx);

// ===== DEMO LOADER =====
const useDemo = () => {
  const clients = useStore(s => s.clients);
  const act = useActions();
  useEffect(() => {
    if (clients.length > 0) return;
    const dc = [
      { name: 'Анна Петрова', phone: '+7 (999) 123-45-67', notes: 'Аллергия на латекс' },
      { name: 'Мария Иванова', phone: '+7 (999) 234-56-78', notes: 'Предпочитает 3D' },
      { name: 'Елена Смирнова', phone: '+7 (999) 345-67-89' },
      { name: 'Ольга Козлова', phone: '+7 (999) 456-78-90', notes: 'Приходит по выходным' },
    ];
    const td = new Date().toISOString().split('T')[0];
    const tm = new Date(Date.now() + 864e5).toISOString().split('T')[0];
    const ys = new Date(Date.now() - 864e5).toISOString().split('T')[0];
    dc.forEach(c => act.addClient(c));
    setTimeout(() => {
      const s = store.getState();
      const ids = s.clients.map(c => c.id);
      if (ids.length >= 4) {
        act.addAppt({ clientId: ids[0], clientName: 'Анна Петрова', date: td, time: '10:00', duration: 120, service: 'Классика', price: 2500, status: 'scheduled' });
        act.addAppt({ clientId: ids[1], clientName: 'Мария Иванова', date: td, time: '14:00', duration: 180, service: '3D Объём', price: 3500, status: 'scheduled' });
        act.addAppt({ clientId: ids[2], clientName: 'Елена Смирнова', date: tm, time: '11:00', duration: 150, service: '2D Объём', price: 3000, status: 'scheduled' });
        act.addAppt({ clientId: ids[3], clientName: 'Ольга Козлова', date: ys, time: '16:00', duration: 90, service: 'Коррекция', price: 2000, status: 'completed' });
        act.addTx({ type: 'income', amount: 2500, category: 'Услуги', description: 'Классика — Анна', date: ys });
        act.addTx({ type: 'income', amount: 3500, category: 'Услуги', description: '3D — Мария', date: ys });
        act.addTx({ type: 'expense', amount: 1500, category: 'Материалы', description: 'Клей для ресниц', date: td });
        act.addTx({ type: 'income', amount: 2000, category: 'Услуги', description: 'Коррекция — Ольга', date: ys });
      }
    }, 100);
  }, [clients.length]);
};

// ===== UI COMPONENTS =====
const Card = ({ children, cls, onClick }) => h('div', { className: 'card ' + (onClick ? 'card-click ' : '') + (cls || ''), onClick: onClick }, children);
const Modal = ({ open, onClose, title, children }) => {
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  if (!open) return null;
  return h('div', { className: 'modal-overlay', onClick: onClose },
    h('div', { className: 'modal', onClick: e => e.stopPropagation() },
      h('div', { className: 'modal-header' },
        h('span', { className: 'modal-title' }, title),
        h('button', { className: 'modal-close', onClick: onClose }, h(I, { n: 'x', s: 18 }))
      ),
      h('div', { className: 'modal-body' }, children)
    )
  );
};
const Btn = ({ children, v, sz, full, cls, ...p }) => {
  const colors = { primary: 'btn-primary', secondary: 'btn-secondary', danger: 'btn-danger', ghost: 'btn-ghost' };
  const sizes = { sm: 'btn-sm', md: '', lg: 'btn-lg' };
  const className = 'btn ' + (colors[v || 'primary'] || 'btn-primary') + ' ' + (sizes[sz || 'md'] || '') + ' ' + (full ? 'btn-full ' : '') + (cls || '');
  return h('button', Object.assign({ className: className.trim() }, p), children);
};
const Inp = ({ label, err, cls, ...p }) => {
  return h('div', { className: 'input-wrap ' + (cls || '') },
    label ? h('label', { className: 'input-label' }, label) : null,
    h('input', Object.assign({ className: 'input ' + (err ? 'border-red ' : '') }, p)),
    err ? h('p', { className: 'text-red text-xs mt-1' }, err) : null
  );
};

// ===== SCREENS =====

// --- DASHBOARD ---
const Dashboard = () => {
  const appts = useStore(s => s.appointments);
  const clients = useStore(s => s.clients);
  const txs = useStore(s => s.transactions);
  const cur = useStore(s => s.settings.currency);
  const td = new Date().toISOString().split('T')[0];
  const todayAppts = useMemo(() => appts.filter(a => a.date === td).sort((a, b) => a.time.localeCompare(b.time)), [appts, td]);
  const stats = useMemo(() => {
    const ms = new Date(); ms.setDate(1);
    const mss = ms.toISOString().split('T')[0];
    const mi = txs.filter(t => t.type === 'income' && t.date >= mss).reduce((s, t) => s + t.amount, 0);
    const me = txs.filter(t => t.type === 'expense' && t.date >= mss).reduce((s, t) => s + t.amount, 0);
    return { mi, me };
  }, [txs]);

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'grid grid-2 gap-3 px-4 pt-4' },
      h(Card, { cls: 'p-4' },
        h('div', { className: 'flex items-center gap-2 mb-2' },
          h('div', { className: 'w-8 h-8 rounded-xl bg-blue-10 flex items-center justify-center' }, h(I, { n: 'users', s: 16, c: 'text-blue' })),
          h('span', { className: 'text-sm text-secondary' }, 'Клиентов')
        ),
        h('p', { className: 'text-2xl font-bold text-primary' }, clients.length)
      ),
      h(Card, { cls: 'p-4' },
        h('div', { className: 'flex items-center gap-2 mb-2' },
          h('div', { className: 'w-8 h-8 rounded-xl bg-green-10 flex items-center justify-center' }, h(I, { n: 'calendar', s: 16, c: 'text-green' })),
          h('span', { className: 'text-sm text-secondary' }, 'Записей')
        ),
        h('p', { className: 'text-2xl font-bold text-primary' }, appts.length)
      ),
      h(Card, { cls: 'p-4' },
        h('div', { className: 'flex items-center gap-2 mb-2' },
          h('div', { className: 'w-8 h-8 rounded-xl bg-green-10 flex items-center justify-center' }, h(I, { n: 'trendingUp', s: 16, c: 'text-green' })),
          h('span', { className: 'text-sm text-secondary' }, 'Доход за месяц')
        ),
        h('p', { className: 'text-2xl font-bold text-green' }, fmtCur(stats.mi, cur))
      ),
      h(Card, { cls: 'p-4' },
        h('div', { className: 'flex items-center gap-2 mb-2' },
          h('div', { className: 'w-8 h-8 rounded-xl bg-red-10 flex items-center justify-center' }, h(I, { n: 'trendingDown', s: 16, c: 'text-red' })),
          h('span', { className: 'text-sm text-secondary' }, 'Расход за месяц')
        ),
        h('p', { className: 'text-2xl font-bold text-red' }, fmtCur(stats.me, cur))
      )
    ),
    h('div', { className: 'px-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h2', { className: 'text-lg font-semibold text-primary' }, 'Сегодня'),
        h('span', { className: 'text-sm text-secondary' }, todayAppts.length + ' записей')
      ),
      todayAppts.length === 0
        ? h(Card, { cls: 'p-6 text-center' },
            h(I, { n: 'calendar', s: 40, c: 'text-tertiary mx-auto mb-2' }),
            h('p', { className: 'text-secondary' }, 'Нет записей на сегодня')
          )
        : h('div', { className: 'space-y-2' }, todayAppts.map(a =>
            h(Card, { key: a.id, cls: 'p-4 flex items-center gap-3' },
              h('div', { className: 'flex flex-col items-center min-w-[60px]' },
                h('span', { className: 'text-lg font-bold text-primary' }, a.time),
                h('span', { className: 'text-xs text-tertiary' }, a.duration + 'мин')
              ),
              h('div', { className: 'flex-1 min-w-0' },
                h('p', { className: 'font-medium text-primary truncate' }, a.clientName),
                h('p', { className: 'text-sm text-secondary' }, a.service)
              ),
              h('div', { className: 'flex items-center gap-2' },
                h('span', { className: 'text-sm font-medium text-green' }, fmtCur(a.price, cur)),
                h('span', { className: stColor[a.status] + ' status-dot' })
              )
            )
          ))
    )
  );
};

// --- CALENDAR ---
const Calendar = () => {
  const [cd, setCd] = useState(new Date());
  const [selDate, setSelDate] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const appts = useStore(s => s.appointments);
  const clients = useStore(s => s.clients);
  const services = useStore(s => s.services);
  const cur = useStore(s => s.settings.currency);
  const act = useActions();
  const [form, setForm] = useState({ clientId: '', time: '10:00', service: '', notes: '' });

  const y = cd.getFullYear(), m = cd.getMonth();
  const fd = new Date(y, m, 1);
  const sd = fd.getDay() === 0 ? 6 : fd.getDay() - 1;
  const dim = new Date(y, m + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < sd; i++) days.push(null);
  for (let i = 1; i <= dim; i++) days.push(i);

  const apByDate = useMemo(() => {
    const map = {};
    appts.forEach(a => { if (!map[a.date]) map[a.date] = []; map[a.date].push(a); });
    return map;
  }, [appts]);

  const selAppts = selDate ? (apByDate[selDate] || []).sort((a, b) => a.time.localeCompare(b.time)) : [];
  const tds = new Date().toISOString().split('T')[0];

  const handleAdd = () => {
    const cl = clients.find(c => c.id === form.clientId);
    const sv = services.find(s => s.name === form.service);
    if (!cl || !sv) return;
    act.addAppt({ clientId: cl.id, clientName: cl.name, date: selDate, time: form.time, duration: sv.duration, service: sv.name, price: sv.price, status: 'scheduled', notes: form.notes });
    setShowAdd(false);
    setForm({ clientId: '', time: '10:00', service: '', notes: '' });
  };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'flex items-center justify-between px-4 pt-4' },
      h('button', { className: 'header-btn', onClick: () => setCd(new Date(y, m - 1)) }, h(I, { n: 'chevronLeft', s: 20 })),
      h('h2', { className: 'text-lg font-semibold' }, monthsRu[m + 1] + ' ' + y),
      h('button', { className: 'header-btn', onClick: () => setCd(new Date(y, m + 1)) }, h(I, { n: 'chevronRight', s: 20 }))
    ),
    h('div', { className: 'px-4' },
      h('div', { className: 'cal-grid mb-2' },
        ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => h('span', { key: d, className: 'cal-day-label' }, d))
      ),
      h('div', { className: 'cal-grid' },
        days.map((day, i) => {
          if (!day) return h('div', { key: 'e' + i });
          const ds = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
          const has = (apByDate[ds] || []).length > 0;
          const isT = ds === tds;
          const isS = selDate === ds;
          return h('button', {
            key: ds,
            className: 'cal-day ' + (isT ? 'today ' : '') + (isS ? 'selected ' : ''),
            onClick: () => setSelDate(ds)
          },
            h('span', null, day),
            has ? h('span', { className: 'cal-dot ' + (isT ? 'today' : 'has') }) : null
          );
        })
      )
    ),
    selDate ? h('div', { className: 'px-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h3', { className: 'font-semibold text-primary' }, fmtDateFull(selDate)),
        h(Btn, { sz: 'sm', onClick: () => { setForm(Object.assign({}, form, { date: selDate })); setShowAdd(true); } },
          h(I, { n: 'plus', s: 16, c: 'mr-1' }), ' Запись'
        )
      ),
      selAppts.length === 0
        ? h(Card, { cls: 'p-6 text-center' }, h('p', { className: 'text-secondary' }, 'Нет записей'))
        : h('div', { className: 'space-y-2' }, selAppts.map(a =>
            h(Card, { key: a.id, cls: 'p-4' },
              h('div', { className: 'flex items-center justify-between' },
                h('div', { className: 'flex items-center gap-3' },
                  h('div', { className: 'flex flex-col items-center min-w-[50px]' },
                    h(I, { n: 'clock', s: 14, c: 'text-tertiary mb-0.5' }),
                    h('span', { className: 'text-sm font-medium' }, a.time)
                  ),
                  h('div', null,
                    h('p', { className: 'font-medium text-primary' }, a.clientName),
                    h('p', { className: 'text-sm text-secondary' }, a.service + ' · ' + a.duration + 'мин')
                  )
                ),
                h('div', { className: 'text-right' },
                  h('p', { className: 'font-medium text-green' }, fmtCur(a.price, cur)),
                  h('span', { className: stColor[a.status] + ' status-dot' })
                )
              )
            )
          ))
    ) : null,
    h(Modal, { open: showAdd, onClose: () => setShowAdd(false), title: 'Новая запись' },
      h('div', { className: 'space-y-4' },
        h('div', null,
          h('label', { className: 'input-label' }, 'Клиент'),
          h('select', {
            className: 'select',
            value: form.clientId,
            onChange: e => setForm(Object.assign({}, form, { clientId: e.target.value }))
          },
            h('option', { value: '' }, 'Выберите клиента'),
            clients.map(c => h('option', { key: c.id, value: c.id }, c.name))
          )
        ),
        h(Inp, { label: 'Время', type: 'time', value: form.time, onChange: e => setForm(Object.assign({}, form, { time: e.target.value })) }),
        h('div', null,
          h('label', { className: 'input-label' }, 'Услуга'),
          h('select', {
            className: 'select',
            value: form.service,
            onChange: e => setForm(Object.assign({}, form, { service: e.target.value }))
          },
            h('option', { value: '' }, 'Выберите услугу'),
            services.map(s => h('option', { key: s.id, value: s.name }, s.name + ' — ' + fmtCur(s.price, cur)))
          )
        ),
        h(Inp, { label: 'Примечания', value: form.notes, onChange: e => setForm(Object.assign({}, form, { notes: e.target.value })), placeholder: 'Особые пожелания...' }),
        h(Btn, { full: true, onClick: handleAdd }, 'Создать запись')
      )
    )
  );
};

// --- CLIENTS ---
const Clients = () => {
  const clients = useStore(s => s.clients);
  const act = useActions();
  const [search, setSearch] = useState('');
  const [showM, setShowM] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' });
  const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search));

  const submit = () => {
    if (editId) act.updateClient(editId, form); else act.addClient(form);
    setShowM(false); setEditId(null); setForm({ name: '', phone: '', email: '', notes: '' });
  };
  const edit = (c) => { setForm({ name: c.name, phone: c.phone, email: c.email || '', notes: c.notes || '' }); setEditId(c.id); setShowM(true); };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4' },
      h('div', { className: 'relative' },
        h(I, { n: 'search', s: 18, c: 'absolute left-3 top-1/2 -translate-y-1/2 text-tertiary' }),
        h('input', { type: 'text', placeholder: 'Поиск клиентов...', value: search, onChange: e => setSearch(e.target.value), className: 'input pl-10' })
      )
    ),
    h('div', { className: 'px-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h2', { className: 'text-lg font-semibold text-primary' }, 'Клиенты (' + filtered.length + ')'),
        h(Btn, { sz: 'sm', onClick: () => setShowM(true) }, h(I, { n: 'plus', s: 16, c: 'mr-1' }), ' Добавить')
      ),
      filtered.length === 0
        ? h(Card, { cls: 'p-8 text-center' },
            h(I, { n: 'user', s: 40, c: 'text-tertiary mx-auto mb-2' }),
            h('p', { className: 'text-secondary' }, search ? 'Ничего не найдено' : 'Нет клиентов')
          )
        : h('div', { className: 'space-y-2' }, filtered.map(c =>
            h(Card, { key: c.id, cls: 'p-4' },
              h('div', { className: 'flex items-start gap-3' },
                h('div', { className: 'avatar' }, getInitials(c.name)),
                h('div', { className: 'flex-1 min-w-0' },
                  h('p', { className: 'font-medium text-primary' }, c.name),
                  h('div', { className: 'flex items-center gap-1 text-sm text-secondary mt-0.5' }, h(I, { n: 'phone', s: 12 }), h('span', null, c.phone)),
                  c.email ? h('div', { className: 'flex items-center gap-1 text-sm text-secondary' }, h(I, { n: 'mail', s: 12 }), h('span', { className: 'truncate' }, c.email)) : null,
                  c.notes ? h('p', { className: 'text-xs text-tertiary mt-1 line-clamp-2' }, c.notes) : null
                ),
                h('div', { className: 'flex flex-col gap-1' },
                  h('button', { className: 'p-2 rounded-lg text-secondary', onClick: () => edit(c) }, h(I, { n: 'edit3', s: 14 })),
                  h('button', { className: 'p-2 rounded-lg text-red', onClick: () => act.deleteClient(c.id) }, h(I, { n: 'trash2', s: 14 }))
                )
              )
            )
          ))
    ),
    h(Modal, {
      open: showM,
      onClose: () => { setShowM(false); setEditId(null); setForm({ name: '', phone: '', email: '', notes: '' }); },
      title: editId ? 'Редактировать' : 'Новый клиент'
    },
      h('div', { className: 'space-y-4' },
        h(Inp, { label: 'Имя', value: form.name, onChange: e => setForm(Object.assign({}, form, { name: e.target.value })), placeholder: 'Имя клиента' }),
        h(Inp, { label: 'Телефон', value: form.phone, onChange: e => setForm(Object.assign({}, form, { phone: e.target.value })), placeholder: '+7 (999) 000-00-00' }),
        h(Inp, { label: 'Email', value: form.email, onChange: e => setForm(Object.assign({}, form, { email: e.target.value })), placeholder: 'email@example.com' }),
        h('div', null,
          h('label', { className: 'input-label' }, 'Примечания'),
          h('textarea', { rows: 3, value: form.notes, onChange: e => setForm(Object.assign({}, form, { notes: e.target.value })), placeholder: 'Особенности, аллергии...', className: 'textarea' })
        ),
        h(Btn, { full: true, onClick: submit }, editId ? 'Сохранить' : 'Добавить')
      )
    )
  );
};

// --- SERVICES ---
const Services = () => {
  const svcs = useStore(s => s.services);
  const act = useActions();
  const cur = useStore(s => s.settings.currency);
  const [showM, setShowM] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', duration: 120, price: 2500, description: '', color: '#007aff' });
  const colors = ['#007aff','#34c759','#af52de','#ff3b30','#ff9500','#ffcc00','#5ac8fa','#e91e63'];

  const submit = () => {
    if (editId) act.updateSvc(editId, form); else act.addSvc(form);
    setShowM(false); setEditId(null); setForm({ name: '', duration: 120, price: 2500, description: '', color: '#007aff' });
  };
  const edit = (s) => { setForm({ name: s.name, duration: s.duration, price: s.price, description: s.description || '', color: s.color || '#007aff' }); setEditId(s.id); setShowM(true); };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h2', { className: 'text-lg font-semibold text-primary' }, 'Услуги (' + svcs.length + ')'),
        h(Btn, { sz: 'sm', onClick: () => setShowM(true) }, h(I, { n: 'plus', s: 16, c: 'mr-1' }), ' Добавить')
      ),
      h('div', { className: 'space-y-2' }, svcs.map(s =>
        h(Card, { key: s.id, cls: 'p-4' },
          h('div', { className: 'flex items-start gap-3' },
            h('div', { className: 'w-3 h-3 rounded-full mt-1.5 shrink-0', style: { backgroundColor: s.color || '#007aff' } }),
            h('div', { className: 'flex-1 min-w-0' },
              h('div', { className: 'flex items-center justify-between' },
                h('p', { className: 'font-medium text-primary' }, s.name),
                h('p', { className: 'font-semibold text-green' }, fmtCur(s.price, cur))
              ),
              h('div', { className: 'flex items-center gap-3 mt-1 text-sm text-secondary' },
                h('span', { className: 'flex items-center gap-1' }, h(I, { n: 'clock', s: 12 }), fmtDur(s.duration)),
                s.description ? h('span', { className: 'truncate' }, s.description) : null
              )
            ),
            h('div', { className: 'flex flex-col gap-1' },
              h('button', { className: 'p-2 rounded-lg text-secondary', onClick: () => edit(s) }, h(I, { n: 'edit3', s: 14 })),
              h('button', { className: 'p-2 rounded-lg text-red', onClick: () => act.deleteSvc(s.id) }, h(I, { n: 'trash2', s: 14 }))
            )
          )
        )
      ))
    ),
    h(Modal, {
      open: showM,
      onClose: () => { setShowM(false); setEditId(null); setForm({ name: '', duration: 120, price: 2500, description: '', color: '#007aff' }); },
      title: editId ? 'Редактировать' : 'Новая услуга'
    },
      h('div', { className: 'space-y-4' },
        h(Inp, { label: 'Название', value: form.name, onChange: e => setForm(Object.assign({}, form, { name: e.target.value })), placeholder: 'Например, Классика' }),
        h('div', { className: 'grid grid-2 gap-3' },
          h(Inp, { label: 'Цена', type: 'number', value: form.price, onChange: e => setForm(Object.assign({}, form, { price: +e.target.value })) }),
          h(Inp, { label: 'Длительность (мин)', type: 'number', value: form.duration, onChange: e => setForm(Object.assign({}, form, { duration: +e.target.value })) })
        ),
        h(Inp, { label: 'Описание', value: form.description, onChange: e => setForm(Object.assign({}, form, { description: e.target.value })), placeholder: 'Краткое описание...' }),
        h('div', null,
          h('label', { className: 'input-label' }, 'Цвет'),
          h('div', { className: 'flex gap-2 flex-wrap' },
            colors.map(c => h('button', {
              key: c,
              onClick: () => setForm(Object.assign({}, form, { color: c })),
              className: 'w-8 h-8 rounded-full border-2 transition-all ' + (form.color === c ? 'border-primary scale-110' : 'border-transparent'),
              style: { backgroundColor: c }
            }))
          )
        ),
        h(Btn, { full: true, onClick: submit }, editId ? 'Сохранить' : 'Добавить')
      )
    )
  );
};

// --- PHOTOS ---
const Photos = () => {
  const photos = useStore(s => s.photos);
  const act = useActions();
  const [showEd, setShowEd] = useState(false);
  const [edId, setEdId] = useState(null);
  const [filters, setFilters] = useState({ brightness: 100, contrast: 100, saturation: 100, blur: 0 });
  const fiRef = useRef(null);
  const df = { brightness: 100, contrast: 100, saturation: 100, blur: 0 };

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    act.addPhoto({ originalUrl: url, filters: Object.assign({}, df) });
  };

  const openEd = (id) => {
    const p = photos.find(x => x.id === id);
    if (!p) return;
    setFilters(p.filters);
    setEdId(id);
    setShowEd(true);
  };

  const fs = (f) => ({ filter: 'brightness(' + f.brightness + '%) contrast(' + f.contrast + '%) saturate(' + f.saturation + '%) blur(' + f.blur + 'px)' });

  const Slider = ({ l, v, min, max, onCh }) =>
    h('div', { className: 'slider-wrap' },
      h('div', { className: 'slider-labels' },
        h('span', { className: 'slider-label' }, l),
        h('span', { className: 'slider-val' }, v)
      ),
      h('input', { type: 'range', min: min, max: max, value: v, onChange: e => onCh(+e.target.value), className: 'slider' })
    );

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h2', { className: 'text-lg font-semibold text-primary' }, 'Фото (' + photos.length + ')'),
        h(Btn, { sz: 'sm', onClick: () => fiRef.current && fiRef.current.click() }, h(I, { n: 'plus', s: 16, c: 'mr-1' }), ' Загрузить'),
        h('input', { ref: fiRef, type: 'file', accept: 'image/*', onChange: handleFile, className: 'hidden' })
      ),
      photos.length === 0
        ? h(Card, { cls: 'p-8 text-center' },
            h(I, { n: 'image', s: 40, c: 'text-tertiary mx-auto mb-2' }),
            h('p', { className: 'text-secondary' }, 'Нет фото'),
            h('p', { className: 'text-xs text-tertiary mt-1' }, 'Загрузите фото работ')
          )
        : h('div', { className: 'photo-grid' }, photos.map(p =>
            h('div', { key: p.id, className: 'photo-item', onClick: () => openEd(p.id) },
              h('img', { src: p.originalUrl, alt: '', style: fs(p.filters) }),
              h('button', { className: 'photo-del', onClick: e => { e.stopPropagation(); act.deletePhoto(p.id); } }, h(I, { n: 'trash2', s: 14 }))
            )
          ))
    ),
    h(Modal, { open: showEd, onClose: () => setShowEd(false), title: 'Редактор' },
      edId ? h('div', { className: 'space-y-4' },
        h('div', { className: 'aspect-square rounded-2xl overflow-hidden bg-primary-900' },
          h('img', { src: photos.find(p => p.id === edId).originalUrl, alt: '', className: 'w-full h-full object-cover', style: fs(filters) })
        ),
        h(Slider, { l: 'Яркость', v: filters.brightness, min: 0, max: 200, onCh: v => setFilters(Object.assign({}, filters, { brightness: v })) }),
        h(Slider, { l: 'Контраст', v: filters.contrast, min: 0, max: 200, onCh: v => setFilters(Object.assign({}, filters, { contrast: v })) }),
        h(Slider, { l: 'Насыщенность', v: filters.saturation, min: 0, max: 200, onCh: v => setFilters(Object.assign({}, filters, { saturation: v })) }),
        h(Slider, { l: 'Размытие', v: filters.blur, min: 0, max: 20, onCh: v => setFilters(Object.assign({}, filters, { blur: v })) }),
        h('div', { className: 'flex gap-2' },
          h(Btn, { v: 'secondary', full: true, onClick: () => setFilters(Object.assign({}, df)) }, 'Сбросить'),
          h(Btn, { full: true, onClick: () => setShowEd(false) }, 'Применить')
        )
      ) : null
    )
  );
};

// --- VIDEOS ---
const Videos = () => {
  const videos = useStore(s => s.videos);
  const act = useActions();
  const [playing, setPlaying] = useState(null);
  const fiRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const v = document.createElement('video');
    v.preload = 'metadata';
    v.onloadedmetadata = () => { act.addVideo({ url: url, title: file.name, duration: Math.round(v.duration) }); URL.revokeObjectURL(v.src); };
    v.src = url;
  };

  const fmtDur = (s) => { const m = Math.floor(s / 60); const sec = s % 60; return m + ':' + String(sec).padStart(2, '0'); };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4' },
      h('div', { className: 'flex items-center justify-between mb-3' },
        h('h2', { className: 'text-lg font-semibold text-primary' }, 'Видео (' + videos.length + ')'),
        h(Btn, { sz: 'sm', onClick: () => fiRef.current && fiRef.current.click() }, h(I, { n: 'plus', s: 16, c: 'mr-1' }), ' Загрузить'),
        h('input', { ref: fiRef, type: 'file', accept: 'video/*', onChange: handleFile, className: 'hidden' })
      ),
      videos.length === 0
        ? h(Card, { cls: 'p-8 text-center' },
            h(I, { n: 'video', s: 40, c: 'text-tertiary mx-auto mb-2' }),
            h('p', { className: 'text-secondary' }, 'Нет видео'),
            h('p', { className: 'text-xs text-tertiary mt-1' }, 'Загрузите видео работ')
          )
        : h('div', { className: 'space-y-3' }, videos.map(v =>
            h(Card, { key: v.id, cls: 'overflow-hidden' },
              h('div', { className: 'relative aspect-video bg-primary-900' },
                h('video', { src: v.url, className: 'w-full h-full object-cover', controls: playing === v.id, onEnded: () => setPlaying(null) }),
                playing !== v.id ? h('button', {
                  className: 'absolute inset-0 flex items-center justify-center',
                  style: { background: 'rgba(0,0,0,0.3)' },
                  onClick: () => setPlaying(v.id)
                },
                  h('div', { className: 'w-14 h-14 rounded-full flex items-center justify-center', style: { background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' } },
                    h(I, { n: 'play', s: 24, c: 'text-white' })
                  )
                ) : null,
                h('button', {
                  className: 'absolute top-2 right-2 p-1.5 rounded-lg',
                  style: { background: 'rgba(255,59,48,0.85)' },
                  onClick: () => act.deleteVideo(v.id)
                }, h(I, { n: 'trash2', s: 14, c: 'text-white' }))
              ),
              h('div', { className: 'p-3' },
                h('p', { className: 'font-medium text-primary truncate' }, v.title),
                h('p', { className: 'text-xs text-secondary flex items-center gap-1' }, h(I, { n: 'clock', s: 10 }), fmtDur(v.duration))
              )
            )
          ))
    )
  );
};

// --- FINANCE ---
const Finance = () => {
  const txs = useStore(s => s.transactions);
  const act = useActions();
  const cur = useStore(s => s.settings.currency);
  const [showM, setShowM] = useState(false);
  const [ft, setFt] = useState('all');
  const [form, setForm] = useState({ type: 'income', amount: '', category: '', description: '', date: new Date().toISOString().split('T')[0] });
  const incCats = ['Услуги', 'Обучение', 'Продажа материалов', 'Другое'];
  const expCats = ['Материалы', 'Аренда', 'Реклама', 'Обучение', 'Инструменты', 'Другое'];

  const stats = useMemo(() => {
    const ti = txs.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const te = txs.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return { ti, te, bal: ti - te };
  }, [txs]);

  const filtered = txs.filter(t => ft === 'all' || t.type === ft).sort((a, b) => b.date.localeCompare(a.date));

  const submit = () => {
    if (!form.amount || !form.category) return;
    act.addTx({ type: form.type, amount: +form.amount, category: form.category, description: form.description, date: form.date });
    setShowM(false);
    setForm({ type: 'income', amount: '', category: '', description: '', date: new Date().toISOString().split('T')[0] });
  };

  const fmtD = (d) => { const [y, m, day] = d.split('-'); return (+day) + ' ' + ['','янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'][+m] + ' ' + y; };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4 grid grid-3 gap-3' },
      h(Card, { cls: 'p-3 text-center' },
        h(I, { n: 'trendingUp', s: 18, c: 'text-green mx-auto mb-1' }),
        h('p', { className: 'text-xs text-secondary' }, 'Доход'),
        h('p', { className: 'text-sm font-bold text-green' }, fmtCur(stats.ti, cur))
      ),
      h(Card, { cls: 'p-3 text-center' },
        h(I, { n: 'trendingDown', s: 18, c: 'text-red mx-auto mb-1' }),
        h('p', { className: 'text-xs text-secondary' }, 'Расход'),
        h('p', { className: 'text-sm font-bold text-red' }, fmtCur(stats.te, cur))
      ),
      h(Card, { cls: 'p-3 text-center' },
        h(I, { n: 'wallet', s: 18, c: 'text-blue mx-auto mb-1' }),
        h('p', { className: 'text-xs text-secondary' }, 'Баланс'),
        h('p', { className: 'text-sm font-bold ' + (stats.bal >= 0 ? 'text-green' : 'text-red') }, fmtCur(stats.bal, cur))
      )
    ),
    h('div', { className: 'px-4' },
      h('div', { className: 'flex gap-2' },
        [{id:'all',l:'Все'},{id:'income',l:'Доходы'},{id:'expense',l:'Расходы'}].map(t =>
          h('button', {
            key: t.id,
            onClick: () => setFt(t.id),
            className: 'px-4 py-2 rounded-xl text-sm font-medium transition-colors ' + (ft === t.id ? 'bg-blue text-white' : 'bg-secondary text-secondary')
          }, t.l)
        )
      )
    ),
    h('div', { className: 'px-4' }, h(Btn, { full: true, onClick: () => setShowM(true) }, h(I, { n: 'plus', s: 18, c: 'mr-2' }), ' Добавить операцию')),
    h('div', { className: 'px-4' },
      h('h3', { className: 'text-sm font-medium text-secondary mb-2' }, 'История'),
      filtered.length === 0
        ? h(Card, { cls: 'p-6 text-center' },
            h(I, { n: 'pieChart', s: 32, c: 'text-tertiary mx-auto mb-2' }),
            h('p', { className: 'text-secondary' }, 'Нет операций')
          )
        : h('div', { className: 'space-y-2' }, filtered.map(t =>
            h(Card, { key: t.id, cls: 'p-4' },
              h('div', { className: 'flex items-center justify-between' },
                h('div', { className: 'flex items-center gap-3' },
                  h('div', { className: 'w-10 h-10 rounded-xl flex items-center justify-center ' + (t.type === 'income' ? 'bg-green-10' : 'bg-red-10') },
                    h(I, { n: t.type === 'income' ? 'trendingUp' : 'trendingDown', s: 18, c: t.type === 'income' ? 'text-green' : 'text-red' })
                  ),
                  h('div', null,
                    h('p', { className: 'font-medium text-primary' }, t.category),
                    h('p', { className: 'text-sm text-secondary' }, t.description || '—'),
                    h('p', { className: 'text-xs text-tertiary' }, fmtD(t.date))
                  )
                ),
                h('div', { className: 'text-right' },
                  h('p', { className: 'font-semibold ' + (t.type === 'income' ? 'text-green' : 'text-red') }, (t.type === 'income' ? '+' : '-') + fmtCur(t.amount, cur)),
                  h('button', { className: 'p-1.5 rounded-lg text-red mt-1', onClick: () => act.deleteTx(t.id) }, h(I, { n: 'trash2', s: 14 }))
                )
              )
            )
          ))
    ),
    h(Modal, { open: showM, onClose: () => setShowM(false), title: 'Новая операция' },
      h('div', { className: 'space-y-4' },
        h('div', { className: 'flex gap-2' },
          h('button', {
            onClick: () => setForm(Object.assign({}, form, { type: 'income' })),
            className: 'flex-1 py-3 rounded-xl font-medium transition-colors ' + (form.type === 'income' ? 'bg-green text-white' : 'bg-secondary text-secondary')
          }, 'Доход'),
          h('button', {
            onClick: () => setForm(Object.assign({}, form, { type: 'expense' })),
            className: 'flex-1 py-3 rounded-xl font-medium transition-colors ' + (form.type === 'expense' ? 'bg-red text-white' : 'bg-secondary text-secondary')
          }, 'Расход')
        ),
        h(Inp, { label: 'Сумма', type: 'number', value: form.amount, onChange: e => setForm(Object.assign({}, form, { amount: e.target.value })), placeholder: '0' }),
        h('div', null,
          h('label', { className: 'input-label' }, 'Категория'),
          h('select', {
            className: 'select',
            value: form.category,
            onChange: e => setForm(Object.assign({}, form, { category: e.target.value }))
          },
            h('option', { value: '' }, 'Выберите'),
            (form.type === 'income' ? incCats : expCats).map(c => h('option', { key: c, value: c }, c))
          )
        ),
        h(Inp, { label: 'Описание', value: form.description, onChange: e => setForm(Object.assign({}, form, { description: e.target.value })), placeholder: 'Необязательно...' }),
        h(Inp, { label: 'Дата', type: 'date', value: form.date, onChange: e => setForm(Object.assign({}, form, { date: e.target.value })) }),
        h(Btn, { full: true, onClick: submit }, 'Добавить')
      )
    )
  );
};

// --- SETTINGS ---
const Settings = () => {
  const { theme, setTheme } = useTheme();
  const settings = useStore(s => s.settings);
  const act = useActions();
  const [showReset, setShowReset] = useState(false);
  const [showImp, setShowImp] = useState(false);
  const [impText, setImpText] = useState('');

  const exportD = () => {
    let d = '{}';
    try { d = localStorage.getItem(SK) || '{}'; } catch {}
    const blob = new Blob([d], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lashmaster-backup-' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importD = () => {
    try {
      JSON.parse(impText);
      try { localStorage.setItem(SK, impText); } catch {}
      _memStorage = JSON.parse(impText);
      window.location.reload();
    } catch {
      alert('Неверный JSON');
    }
  };

  return h('div', { className: 'space-y-4 pb-24' },
    h('div', { className: 'px-4 pt-4' },
      h('h2', { className: 'text-lg font-semibold text-primary mb-4' }, 'Настройки'),
      h('div', { className: 'mb-6' },
        h('h3', { className: 'text-sm font-medium text-secondary mb-3' }, 'Тема'),
        h('div', { className: 'grid grid-3 gap-2' },
          [{id:'light',l:'Светлая',i:'sun'},{id:'dark',l:'Тёмная',i:'moon'},{id:'auto',l:'Авто',i:'monitor'}].map(t =>
            h('button', {
              key: t.id,
              onClick: () => setTheme(t.id),
              className: 'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ' + (theme === t.id ? 'border-blue bg-blue-10' : 'border-transparent bg-card')
            },
              h(I, { n: t.i, s: 20, c: theme === t.id ? 'text-blue' : 'text-secondary' }),
              h('span', { className: 'text-sm font-medium ' + (theme === t.id ? 'text-blue' : 'text-secondary') }, t.l)
            )
          )
        )
      ),
      h(Card, { cls: 'p-4 mb-4 flex items-center justify-between' },
        h('div', { className: 'flex items-center gap-3' },
          h('div', { className: 'w-10 h-10 rounded-xl bg-blue-10 flex items-center justify-center' }, h(I, { n: 'bell', s: 18, c: 'text-blue' })),
          h('div', null,
            h('p', { className: 'font-medium text-primary' }, 'Уведомления'),
            h('p', { className: 'text-sm text-secondary' }, 'Напоминания о записях')
          )
        ),
        h('button', {
          className: 'toggle ' + (settings.notifications ? 'on' : ''),
          onClick: () => act.updateSet({ notifications: !settings.notifications })
        }, h('span', { className: 'toggle-knob' }))
      ),
      h('div', { className: 'mb-4' },
        h('h3', { className: 'text-sm font-medium text-secondary mb-3' }, 'Данные'),
        h('div', { className: 'space-y-2' },
          h(Card, { cls: 'p-4 flex items-center justify-between', onClick: exportD },
            h('div', { className: 'flex items-center gap-3' },
              h('div', { className: 'w-10 h-10 rounded-xl bg-green-10 flex items-center justify-center' }, h(I, { n: 'download', s: 18, c: 'text-green' })),
              h('div', null,
                h('p', { className: 'font-medium text-primary' }, 'Экспорт'),
                h('p', { className: 'text-sm text-secondary' }, 'Сохранить резервную копию')
              )
            )
          ),
          h(Card, { cls: 'p-4 flex items-center justify-between', onClick: () => setShowImp(true) },
            h('div', { className: 'flex items-center gap-3' },
              h('div', { className: 'w-10 h-10 rounded-xl bg-purple-10 flex items-center justify-center' }, h(I, { n: 'upload', s: 18, c: 'text-purple' })),
              h('div', null,
                h('p', { className: 'font-medium text-primary' }, 'Импорт'),
                h('p', { className: 'text-sm text-secondary' }, 'Восстановить из копии')
              )
            )
          ),
          h(Card, { cls: 'p-4 flex items-center justify-between', onClick: () => setShowReset(true) },
            h('div', { className: 'flex items-center gap-3' },
              h('div', { className: 'w-10 h-10 rounded-xl bg-red-10 flex items-center justify-center' }, h(I, { n: 'trash2', s: 18, c: 'text-red' })),
              h('div', null,
                h('p', { className: 'font-medium text-red' }, 'Сбросить всё'),
                h('p', { className: 'text-sm text-secondary' }, 'Удалить все данные')
              )
            )
          )
        )
      ),
      h('div', { className: 'text-center pt-4' },
        h('p', { className: 'text-sm text-tertiary' }, 'LashMaster Pro v1.0'),
        h('p', { className: 'text-xs text-tertiary mt-1' }, 'PWA для lash-мастеров')
      )
    ),
    h(Modal, { open: showImp, onClose: () => setShowImp(false), title: 'Импорт' },
      h('div', { className: 'space-y-4' },
        h('p', { className: 'text-sm text-secondary' }, 'Вставьте JSON из резервной копии. Текущие данные будут заменены.'),
        h('textarea', { rows: 6, value: impText, onChange: e => setImpText(e.target.value), placeholder: 'Вставьте JSON...', className: 'textarea text-xs font-mono' }),
        h(Btn, { full: true, onClick: importD }, 'Импортировать')
      )
    ),
    h(Modal, { open: showReset, onClose: () => setShowReset(false), title: 'Подтверждение' },
      h('div', { className: 'space-y-4 text-center' },
        h(I, { n: 'alertTriangle', s: 48, c: 'text-red mx-auto' }),
        h('p', { className: 'font-medium text-primary' }, 'Удалить все данные?'),
        h('p', { className: 'text-sm text-secondary' }, 'Это нельзя отменить. Все клиенты, записи, финансы будут удалены.'),
        h('div', { className: 'flex gap-2' },
          h(Btn, { v: 'secondary', full: true, onClick: () => setShowReset(false) }, 'Отмена'),
          h(Btn, { v: 'danger', full: true, onClick: () => { act.reset(); setShowReset(false); } }, 'Удалить')
        )
      )
    )
  );
};

// ===== APP =====
const tabs = [
  { id: 'dashboard', label: 'Главная', icon: 'home' },
  { id: 'calendar', label: 'Календарь', icon: 'calendar' },
  { id: 'clients', label: 'Клиенты', icon: 'users' },
  { id: 'services', label: 'Услуги', icon: 'scissors' },
  { id: 'photos', label: 'Фото', icon: 'image' },
  { id: 'videos', label: 'Видео', icon: 'video' },
  { id: 'finance', label: 'Финансы', icon: 'wallet' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

const titles = {
  dashboard: 'LashMaster Pro',
  calendar: 'Календарь',
  clients: 'Клиенты',
  services: 'Услуги',
  photos: 'Фото',
  videos: 'Видео',
  finance: 'Финансы',
  settings: 'Настройки',
};

const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem('lm-theme') || 'dark'; } catch { return 'dark'; }
  });
  const resolved = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  useEffect(() => {
    try { localStorage.setItem('lm-theme', theme); } catch {}
    if (resolved === 'dark') document.body.classList.add('dark'); else document.body.classList.remove('dark');
  }, [theme, resolved]);
  return h(ThemeCtx.Provider, { value: { theme: theme, resolvedTheme: resolved, setTheme: setThemeState } }, children);
};

const App = () => {
  const [tab, setTab] = useState('dashboard');
  useDemo();

  const screen = () => {
    switch (tab) {
      case 'dashboard': return h(Dashboard);
      case 'calendar': return h(Calendar);
      case 'clients': return h(Clients);
      case 'services': return h(Services);
      case 'photos': return h(Photos);
      case 'videos': return h(Videos);
      case 'finance': return h(Finance);
      case 'settings': return h(Settings);
      default: return h(Dashboard);
    }
  };

  return h(ThemeProvider, null,
    h('div', { className: 'min-h-screen' },
      h('header', { className: 'header' },
        h('div', { className: 'header-inner' },
          h('button', { className: 'header-btn' }, h(I, { n: 'menu', s: 22 })),
          h('h1', { className: 'header-title' }, titles[tab]),
          h('div', { className: 'flex items-center gap-1' },
            h('button', { className: 'header-btn' }, h(I, { n: 'search', s: 20 })),
            h('button', { className: 'header-btn relative' },
              h(I, { n: 'bell', s: 20 }),
              h('span', { className: 'badge-dot' })
            )
          )
        )
      ),
      h('main', null, screen()),
      h('div', { style: { height: 80 } }),
      h('nav', { className: 'bottom-nav' },
        h('div', { className: 'bottom-nav-inner' },
          tabs.map(t => h('button', {
            key: t.id,
            className: 'nav-item ' + (tab === t.id ? 'active' : ''),
            onClick: () => setTab(t.id)
          }, h(I, { n: t.icon, s: 22, w: tab === t.id ? 2.5 : 1.5 }), h('span', null, t.label)))
        )
      )
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h(App));

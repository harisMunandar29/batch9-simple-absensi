let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// master data absensi
let data_absensi = [];

absensi_form.addEventListener('submit', (e) => {
  // stop reload
  e.preventDefault();

  let username = e.target.username.value;

  // push data array
  data_absensi.push({
    nama_lengkap: username,
    date: replaceDate(),
  });

  // reset input
  e.target.username.value = '';

  // panggil function
  renderHTML();
});

// function render data array ke HTML
const renderHTML = () => {
  // tangkap id root
  root.innerHTML = '';

  // mapping data array data_absensi ke id root
  data_absensi.forEach((element, index) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="deleteAbsensi(${index})">${element.nama_lengkap} <span> ${element.date} </span></div>
    `;
  });
};

// delete absensi
const deleteAbsensi = (i) => {
  console.info(i);
  // delete data array sesuai index
  data_absensi.splice(i, 1);

  // panggil kembali function renderHTML
  renderHTML();
};

const replaceDate = () => {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();

  return `${date} - ${time}`;
};

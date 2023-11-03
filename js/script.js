let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}


document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

function tampilkanNotifikasi(event) {
  event.preventDefault(); // Menghentikan pengiriman form (jika Anda tidak ingin halaman terrefresh)

  // Dapatkan nilai dari elemen-elemen input dalam form
  var nama = document.getElementById('input-nama').value;
  var nomorHP = document.getElementById('input-nomor').value;
  var jumlah = document.getElementById('input-jumlah').value;
  var waktuTanggal = document.getElementById('input-tanggal').value;
  var alamat = document.getElementById('input-alamat').value;
  var pesan = document.getElementById('input-pesan').value;

  var total_harga = jumlah * 99000;
  var total_harga_formatted = total_harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

  // Buat pesan notifikasi dengan nilai-nilai dari form
  var notifikasiPesan = `"Pesanan Anda berhasil diterima!\n\nNama: ${nama}\nNomor Handphone: ${nomorHP}\nJumlah: ${jumlah}\nWaktu dan Tanggal: ${waktuTanggal}\nAlamat: ${alamat}\nPesan: ${pesan}\n\nTotal Harga: ${total_harga_formatted}`;

  // Tampilkan notifikasi
  alert(notifikasiPesan);
}

// Temukan form dengan ID "myForm" dan tambahkan event listener untuk menghandle submit
var form = document.getElementById("myForm");
form.addEventListener("submit", tampilkanNotifikasi);
var swiper = new Swiper(".home-slider", {
  spaceBetween: 150,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([42.7339, 25.4858],8);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);


//   L.marker([43.2102, 23.5529]).addTo(map)
//     .bindPopup('Враца<br> <a href="https://www.youtube.com/watch?v=riewPfSmaHI')
//     .openPopup();

//   L.marker([43.4170, 24.6067]).addTo(map)
//      .bindPopup('Плевен<br> <a href="https://www.youtube.com/watch?v=GiZa4Mf0kqM')
//      .openPopup();
  
//   L.marker([42.6977, 23.3219]).addTo(map)
//      .bindPopup('София<br> <a href="https://www.youtube.com/watch?v=yxsgjD1sAHg')
//      .openPopup();

//   L.marker([43.1370, 24.7142]).addTo(map)
//      .bindPopup('Ловеч<br> <a href="https://www.youtube.com/watch?v=dF-y7VihH5o')
//      .openPopup();
  
//   L.marker([43.2141, 27.9147]).addTo(map)
//      .bindPopup('Варна<br> <a href="https://www.youtube.com/watch?v=cr7RGZVCm5Y')
//      .openPopup();
  
//   L.marker([43.2712, 26.9361]).addTo(map)
//      .bindPopup('Шумен<br> <a href="https://www.youtube.com/watch?v=rSu_4w6uXc8')
//      .openPopup();
  
//   L.marker([41.5774,  24.7011]).addTo(map)
//      .bindPopup('Смолян<br> <a href="https://www.youtube.com/watch?v=RqRbN4_eHdk')
//      .openPopup();
   
//   L.marker([43.4085, 23.2257]).addTo(map)
//      .bindPopup('Монтана<br> <a href="https://www.youtube.com/watch?v=MtkxWQF4D0Q')
//      .openPopup();


} 

function draw() { 

}
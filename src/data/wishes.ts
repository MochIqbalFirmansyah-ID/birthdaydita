export const wishes = [
  "Semoga rezekimu lancar, hatimu lapang, dan harimu penuh kejutan manis.",
  "Semoga yang kamu doakan diaminkan langit hari ini.",
  "Semoga selalu dipertemukan dengan orang baik (termasuk aku 😎).",
  "Semoga langkahmu dipermudah, mimpi-mimpimu dibukakan jalan.",
  "Semoga tahun ini jadi tahun terseru dan terindah buat kamu.",
  "Semoga setiap usahamu berbuah hasil yang indah.",
  "Semoga kamu selalu dikelilingi cinta, tawa, dan kebahagiaan.",
  "Semoga hari-harimu penuh warna, seperti pelangi setelah hujan.",
  "Semoga kamu selalu sehat, bahagia, dan dilindungi dari hal-hal buruk.",
  "Semoga semua yang kamu impikan perlahan terwujud, satu per satu."
];

export function getRandomWish(): string {
  return wishes[Math.floor(Math.random() * wishes.length)];
}

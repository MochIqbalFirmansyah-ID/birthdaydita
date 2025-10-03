import { QuizQuestion, QuizResult } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Pilih mana, Matcha atau Taro?",
    options: ["Matcha 🍵", "Taro 🍠"]
  },
  {
    question: "Favorit kamu, Dimsum Mentai Meliza atau Dimsum Mentai Kalikangkung?",
    options: ["Dimsum Mentai Meliza 🥟🔥", "Dimsum Mentai Kalikangkung 🍲"]
  },
  {
    question: "Liburan impian: Pantai atau Gunung?",
    options: ["Pantai 🏖️", "Gunung ⛰️"]
  }
];

// list hasil random
const results: QuizResult[] = [
  {
    title: "Rahasia Terungkap 💘",
    description: "Apa pun pilihanmu, intinya cuma satu... Iqbal suka banget sama Dita! Selamat ulang tahun 🎂"
  },
  {
    title: "Plot Twist 🎬",
    description: "Jawabanmu nggak terlalu penting... karena ending-nya selalu: Iqbal sayang Dita. Selamat ulang tahun 🎉"
  },
  {
    title: "Sweet Ending 🍯",
    description: "Quiz ini sebenernya jebakan, biar aku bisa bilang: Iqbal cinta Dita! Selamat ulang tahun 💐"
  },
  {
    title: "Winner Winner 🏆",
    description: "Selamat! Kamu dapet hadiah seumur hidup... yaitu hati Iqbal buat Dita. Selamat ulang tahun ✨"
  },
  {
    title: "No Escape 🚀",
    description: "Mau pilih matcha, taro, dimsum, pantai, atau gunung... hasil akhirnya sama: Iqbal suka Dita! Selamat ulang tahun 💕"
  }
];

export function getQuizResult(answers: number[]): QuizResult {
  // ambil random index dari results
  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex];
}

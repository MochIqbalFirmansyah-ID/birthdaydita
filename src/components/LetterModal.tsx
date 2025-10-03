import { X, Download } from 'lucide-react';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LetterModal({ isOpen, onClose }: LetterModalProps) {
  if (!isOpen) return null;

  const handleSavePDF = () => {
    alert('Fitur simpan PDF sedang dalam pengembangan. Untuk saat ini, kamu bisa screenshot halaman ini! 📸');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="modal-body">
          <h2 className="modal-title">Surat Panjang Untuk Ditaa 💌</h2>

          <div className="letter-content">
            <p className="letter-greeting">Hai, Ditaa</p>

            <p>
              Selamat ulang tahun yang ke-21! (atau umur berapa pun yang tepat sekarang 😄).
              Hari ini spesial banget, bukan cuma karena kamu nambah umur, tapi karena aku
              bisa ngingetin kamu betapa berartinya kamu.
            </p>

            <p>
              Terima kasih udah jadi tempat aku cerita tentang hal-hal random, dari yang seru
              sampai yang absurd. Terima kasih udah dengerin keluh kesah, ketawa bareng waktu
              ada yang lucu, dan tetap di sini waktu semuanya terasa berat.
            </p>

            <p>
              Aku nggak bisa janji hari-hari ke depan bakal selalu mudah, tapi aku janji akan
              selalu ada, mendukung setiap langkahmu, merayakan setiap kemenanganmu, dan jadi
              tempat pulang kalau kamu butuh.
            </p>

            <p>
              Semoga tahun ini membawa banyak kebahagiaan, kesempatan baru, dan momen-momen
              yang bikin kamu tersenyum. Semoga semua yang kamu impikan perlahan terwujud,
              satu per satu. Dan yang paling penting, semoga kamu selalu sehat dan bahagia.
            </p>

            <p>
              Kalau suatu hari kamu merasa down atau lupa seberapa hebat kamu, baca ini lagi.
              Inget, kamu itu kuat, kamu itu capable, dan kamu layak dapetin semua hal baik
              di dunia ini.
            </p>

            <p className="letter-closing">
              Happy birthday, sayang. Cheers to another amazing year! 🥂
            </p>

            <p className="letter-signature">
              Dengan cinta dan tawa,<br />
              <strong>Iqbal</strong>
            </p>
          </div>

          <button onClick={handleSavePDF} className="btn btn-primary mt-6">
            <Download size={20} />
            Simpan PDF
          </button>
        </div>
      </div>
    </div>
  );
}

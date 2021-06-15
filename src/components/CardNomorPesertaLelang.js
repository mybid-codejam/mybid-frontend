import useInput from '../hooks/useInput';
import '../styles/components/cardNomorPesertaLelang.css';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

export default function NomorPesertaLelang() {
  const [nama, resetNama, bindNama] = useInput();
  const [bank, resetBank, bindBank] = useInput();
  const [norek, resetNorek, bindNorek] = useInput();
  const [ktp, resetKtp, bindKtp] = useInput();

  return (
    <div className="card-wrapper">
      <h3 className="card-title">Beli NPL (Nomor Peserta Lelang)</h3>
      <input
        type="text"
        placeholder="Atas nama"
        className="inputNPL"
        {...bindNama}
      />
      <input
        type="text"
        placeholder="Pilihan bank"
        className="inputNPL"
        {...bindBank}
      />
      <input
        type="number"
        placeholder="Nomor rekening"
        className="inputNPL"
        {...bindNorek}
      />
      <span className="warning-text">
        <ExclamationCircleIcon className="h-12 w-12 mr-2 mt-0 p-0" />
        <p>
          Nomor rekening ini akan digunakan untuk keperluan transaksi Anda di
          Mybid. Mohon periksa nomor tersebut dengan benar.
        </p>
      </span>
      <input
        type="number"
        placeholder="Nomor E-KTP"
        className="inputNPL"
        {...bindKtp}
      />
      <button type="submit" className="button-beliNPL">
        Beli NPL
      </button>
    </div>
  );
}

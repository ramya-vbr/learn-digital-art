"use client";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog = ({ isOpen, onClose }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">
            Mona Lisa by Leonardo da Vinci
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          &quot;The &apos;Mona Lisa,&apos; painted by Leonardo da Vinci between
          1503 and 1506, is a masterpiece of the Italian Renaissance. Known for
          her enigmatic expression, the &apos;Mona Lisa&apos; has captivated
          viewers for centuries. This portrait, housed in the Louvre Museum, is
          renowned for its exquisite detail and innovative use of sfumato.
          Discover the secrets behind her smile by clicking below.&quot;
        </div>
        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
          <button
            onClick={onClose}
            data-ripple-dark="true"
            data-dialog-close="true"
            className="px-6 py-3 mr-1 font-sans text-xs font-bold text-white uppercase transition-all rounded-lg middle none center bg-red-500 hover:bg-red-600/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

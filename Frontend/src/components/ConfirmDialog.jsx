import Dialog from "./Dialog";

export default function ConfirmDialog({ open, onClose, onConfirm, title = "Are you sure?", description }) {
  return (
    <Dialog open={open} onClose={onClose} title={title}>
      {description && <p className="mb-6 text-sm text-gray-500">{description}</p>}
      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Sign out
        </button>
      </div>
    </Dialog>
  );
}
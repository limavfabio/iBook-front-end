function DetailRow({ label, value, isGrayBackground }) {
  const backgroundClass = isGrayBackground ? 'bg-gray-300' : '';

  return (
    <div className={`flex py-2 px-4 justify-between text-sm ${backgroundClass}`}>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}

export default DetailRow;

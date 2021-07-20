const Footnote = ({ unlinkedText, linkedText, onClickLink }) => (
  <div className="flex flex-row mt-1">
    <p className="text-xs text-gray-400">{unlinkedText}</p>
    <p
      className="text-xs text-gray-400 underline ml-1 cursor-pointer"
      onClick={onClickLink}
    >
      {linkedText}
    </p>
  </div>
);
export default Footnote;

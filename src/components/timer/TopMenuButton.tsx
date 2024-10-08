interface TopMenuButtonProps {
  buttonName: string;
  handleButtonClick: () => void;
}

export default function TopMenuButton({
  buttonName,
  handleButtonClick,
}: TopMenuButtonProps) {
  return (
    <div>
      <button
        onClick={handleButtonClick}
        id={buttonName}
        className="bg-red-600"
      >
        <p className=" text-white">{buttonName}</p>
      </button>
    </div>
  );
}

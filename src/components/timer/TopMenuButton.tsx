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
        className="bg-red-600 p-2 rounded-md hover:bg-red-500 focus:bg-green-300"
      >
        <p className=" text-white">{buttonName}</p>
      </button>
    </div>
  );
}

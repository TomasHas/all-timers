interface TimerButton {
  name: string;
}

export default function TimerButton({ name }: TimerButton) {
  return (
    <button className="capitalize text-white hover:text-lg w-32 focus:bg-red-500">
      {name}
    </button>
  );
}

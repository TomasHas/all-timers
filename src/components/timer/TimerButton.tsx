interface TimerButton {
  name: string;
}

export default function TimerButton({ name }: TimerButton) {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      className="capitalize text-white"
    >
      {name}
    </button>
  );
}

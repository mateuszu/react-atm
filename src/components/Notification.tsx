export default function Notification({ message }: { message: string }) {
  return (
    <div className="h-6 flex items-center">
      <p
        className={
          message ? "text-sm text-red-600 font-medium" : "invisible text-sm"
        }
      >
        {message || " "}
      </p>
    </div>
  );
}

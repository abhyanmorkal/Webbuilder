interface TitleProps {
  title: string;
}
const Button = ({ title = "Connect Now" }: TitleProps) => {
  return (
    <div className="gradient-border">
      <button className="button-content dark:bg-slate-100 dark:text-black">
        {title}
      </button>
    </div>
  );
};

export default Button;

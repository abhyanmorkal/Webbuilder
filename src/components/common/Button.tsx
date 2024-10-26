interface TitleProps {
  title: string;
}
const Button = ({ title = "Connect Now" }: TitleProps) => {
  return (
    <div className="gradient-border">
      <button className="button-content">{title}</button>
    </div>
  );
};

export default Button;

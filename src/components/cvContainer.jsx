import "../styles/container.css";

export default function CvContainer({ children, className }) {
  return <div className={className}>{children}</div>;
}

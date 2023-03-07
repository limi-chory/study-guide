import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  header?: string;
}

const Header = ({ title, header }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <title>{title}</title>
      <span className={styles.title}>{header}</span>
    </div>
  );
};

export default Header;

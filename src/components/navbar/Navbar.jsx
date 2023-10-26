import Link from 'next/link';
import styles from './app.module.scss';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Shubham</Link>
      <div className={styles.navList}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
        </Link>
        ))}
        {/* <button>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;

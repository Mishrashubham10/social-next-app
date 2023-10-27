import Button from '@/components/button/Button';
import styles from './app.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Stroytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award wining digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
            praesentium exercitationem, in sed quisquam rem magni, iusto laborum
            officia harum cupiditate veritatis odit! Iure suscipit consectetur
            molestias velit hic ullam beatae aperiam commodi nulla harum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut
            delectus soluta quasi? Hic velit, nihil saepe expedita eius quasi?
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam quasi assumenda laborum repudiandae atque vero nihil corrupti dolores aut? Aperiam iste accusantium distinctio illum?
          Creative Illustrations 
          <br /><br /> - Dynamic Websites 
          <br /><br /> - Fast and Handy 
          <br /><br /> - Mobile Apps
        </p>
        <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

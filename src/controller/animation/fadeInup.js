import { useSpring } from '@react-spring/web';


/*
* add more fade animation in the future, Please :), the hook just lools so silly
*/
const useFadeInUp = (config = { duration: 1000 }) => {
  return useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -40px, 20px)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 25px)' },
    config
  });
};

export default useFadeInUp;

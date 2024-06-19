import useMediaQuery from '@mui/material/useMediaQuery';
/**
* 
* @breakpoint xs: 400px, sm: 600px, md: 900px, lg: 1200px
*
*/
export default function useChangeByMQ(styles, queriedStyles) {
    const xsmatched = useMediaQuery('(min-width:400px)');
    const smmatched = useMediaQuery('(min-width:600px)');
    const mdmatched = useMediaQuery('(min-width:900px)');
    const lgmatched = useMediaQuery('(min-width:1200px)');


    if (mdmatched) {
        styles = { ...styles, ...queriedStyles.md };
    } else if (smmatched) {
        styles = { ...styles, ...queriedStyles.sm };
    }else if (lgmatched) {
        styles = { ...styles, ...queriedStyles.lg };
    }else if (xsmatched) {
        styles = { ...styles, ...queriedStyles.xs };
    }

    return styles;
}
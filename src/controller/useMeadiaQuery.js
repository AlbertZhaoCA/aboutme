import useMediaQuery from '@mui/material/useMediaQuery';

export default function useChangeByMQ(styles, queriedStyles) {
    const smmatched = useMediaQuery('(min-width:600px)');
    const mdmatched = useMediaQuery('(min-width:900px)');
    const lgmatched = useMediaQuery('(min-width:1200px)');


    if (mdmatched) {
        styles = { ...styles, ...queriedStyles.md };
    } else if (smmatched) {
        styles = { ...styles, ...queriedStyles.sm };
    }else if (lgmatched) {
        styles = { ...styles, ...queriedStyles.lg };
    }

    return styles;
}
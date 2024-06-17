export default function Gallary({list,styles}) {
    console.log(list);
    console.log(styles)

    return (
        <div style={styles.box}>
            {list.map((item) => {
                return (
                    <a href={item.href} >
                        <img src={item.url} alt={item.alt} style={styles.pictures} />
                    </a>
                )
            })
            }
        </div>
    );
}
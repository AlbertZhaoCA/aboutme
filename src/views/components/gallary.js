export default function Gallary(list) {
    list = list.list;//! rewite ! all the parmeter is passed as an object, so we need to extract the list from the object 
    console.log(list)
    return (
        <div style={{display:'flex',width:'15%',justifyContent:'space-around'}}>
            {list.map((item) => {
                return (
                    <a href={item.href} >
                        <img src={item.url} alt={item.alt} style={{ width: '25px', height: '25px' }} />
                    </a>
                )
            })
            }
        </div>
    );
}
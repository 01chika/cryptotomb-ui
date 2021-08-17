const Button = ({data, filter}) => {
    const buttons = ['All', ...new Set(data.map(plot => plot.tombType))];

    return ( 
        <div className="buttons">
            {
                buttons.map((cat)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn-tombType">{cat}</button>
                })
            }
        </div>
     );
}
 
export default Button;
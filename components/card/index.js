

export default function Card({ children }){
    return(
        <>
        <div className="card">
            { children }
        </div>
        <style jsx>{`
            .card{
                background-color: var(--light-very-light-gray);
                border-radius: 4px;
                display: flex
            }    
        `}</style>
        </>
    )
}
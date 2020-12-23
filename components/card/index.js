

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
                display: flex;
                flex-direction: column;
                box-shadow: 0 18px 40px 0px rgba(0,0,0,.1)
            }    
        `}</style>
        </>
    )
}
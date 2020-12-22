export default function Container({ children }){
    return(
        <>
        <div className="container">
            { children }
        </div>
        <style jsx>{`
            .container{
                max-width: 550px;
                margin: 0 auto;
                /* background-color: #ccc; */
            }

            @media only screen and (max-width: 375px){
                .container{
                    width: 90%;
                    margin: 0px auto;
                }
            }  
        `}</style>
        </>
    )
}
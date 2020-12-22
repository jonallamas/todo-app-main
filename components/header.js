export default function Header({ children }){
    return(
        <>
        <header>
            { children }
        </header>
        <style jsx>{`
            header{
                height: 300px;
                background-image: url('/bg-desktop-light.jpg');
                background-position: center;
                background-size: cover;
                padding: 3.5rem 0
            }    
        `}</style>
        </>
    )
}
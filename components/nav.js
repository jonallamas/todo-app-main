

export default function Nav(){
    return(
        <>
        <nav>
            <div className="logo">
                <h1>Todo</h1>
            </div>
            <div className="navRight">
                <button type="button" className="icon iconMoon"></button>
            </div>
        </nav>

        <style jsx>{`
            nav{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem
            }
            .icon{
                width: 1.5rem;
                height: 1.5rem;
                padding: .3rem;
                background-color: transparent;
                outline: none;
                background-size: cover;
                border: none;
                cursor: pointer
            }
            .iconSun{
                background-image: url('/icon-sun.svg');
            }
            .iconMoon{
                background-image: url('/icon-moon.svg');
            }
            .logo{
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: .5rem;
                color: var(--light-very-light-gray)
            }
            h1{
                font-size: 2rem;
                margin: 0
            }
        `}</style>
        </>
    )
}
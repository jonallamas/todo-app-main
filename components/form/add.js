
export default function Add({ children }){
    return(
        <>
        <form>
            <div className="radio">
                <label className="contCheck">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <input type="text" className="addTodo" placeholder="Ingrese un texto" />
        </form>
        <style jsx>{`
            form{
                display: flex;
                width: 100%;
                /* background-color: var(--light-very-light-gray) */
            }
            input{
                font-family: "Josefin Sans", sans-serif;
                font-size: 18px
            }
            .radio{
                flex-basis: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                /* background-color: var(--light-very-light-gray) */
            }
            .contCheck{
                height: 1.2rem;
                width: 1.2rem;
                cursor: pointer;
                position: relative;
                display: block;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .contCheck input{
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0
            }
            .checkmark{
                position: absolute;
                top: 0;
                left: 0;
                height: 1.2rem;
                width: 1.2rem;
                background-color: var(--light-very-light-gray);
                border: 1px solid var(--light-light-grayish-blue);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box
            }
            /* Al hacer hover */
            .contCheck:hover input ~ .checkmark{
                border-color: var(--primary-bright-blue)
            }
            /* Al estar seleccionado el check */
            .contCheck input:checked ~ .checkmark{
                background: var(--primary-check-background);
                border: none
            }
            .checkmark:after{
                content: "";
                position: absolute;
                display: none;
                background-size: cover;
                background-position: center;
                height: 50%;
                width: 50%;
            }
            /* Mostrar ícono al estar seleccionado input */
            .contCheck input:checked ~ .checkmark:after{
                display: flex
            }
            /* Ícono */
            .contCheck .checkmark:after{
                margin: 0 auto;
                background-image: url('/icon-check.svg')
            }

            .addTodo{
                width: 100%;
                border: none;
                padding: 1rem 1.5rem 1rem .5rem;
                background-color: transparent;
                outline: none
            }
        `}</style>
        </>
    )
}
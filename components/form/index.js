import Input from './input'

export default function Form({ children }){
    return(
        <>
        <form>
            <Input type="form" />
        </form>
        <style jsx>{`
            form{
                display: flex;
                width: 100%
            }
        `}</style>
        </>
    )
}
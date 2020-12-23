// import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Container from '../components/container'
import Nav from '../components/nav'

import Card from '../components/card'
import Item from '../components/card/item'

import Form from '../components/form'
import Input from '../components/form/input'

export default function Home() {
    return (
        <>
        <Header>
            <Container>
                <Nav />
                <Card>
                    <Form />
                </Card>
            </Container>
        </Header>
        <section style={{ paddingBottom: '2rem' }}>
            <Container>
                <div className="list" style={{ marginTop: '-4.5rem' }}>
                    <Card>
                        <div className="cardBody">
                            <ul className="todoList">
                                <li className="todo">
                                    <Item text="Esto es un texto hijos" />
                                    <Item text="Esto es un texto hijos de una grandísima" />
                                    <Item text="Esto es un texto hijos de una grandísima puta" />
                                    <Item text="Esto es un texto hijos de una grandísima puta que los parió" />
                                    <Item text="Esto es un texto hijos de una grandísima puta que los parió a todos ustedes, inservibles" />
                                </li>
                            </ul>
                        </div>
                        <div className="cardFooter">
                            <span className="space">
                                5 items left
                            </span>
                            <span className="space center">
                                <button type="button" className="active">
                                    All
                                </button>
                                <button type="button" className="">
                                    Active
                                </button>
                                <button type="button" className="">
                                    Completed
                                </button>
                            </span>
                            <span className="space">
                                <button type="button" className="">
                                    Clear Completed
                                </button>
                            </span>
                        </div>
                        
                        <style jsx>{`
                            .cardBody{
                                display: flex;
                                flex-direction: column;
                                width: 100%
                            }
                            .cardFooter{
                                display: flex;
                                justify-content: space-between;
                                padding: 1rem 1.2rem;
                                font-size: .8rem;
                                border-top: 1px solid var(--light-very-light-grayish-blue)
                            }
                            .cardFooter .space{
                                display: flex;
                                color: var(--light-dark-grayish-blue);
                                font-weight: 400
                            }
                            .space.center button{
                                padding: 0 .5rem
                            }
                            .space button{
                                border: none;
                                font-weight: 700;
                                background-color: transparent;
                                cursor: pointer;
                                color: var(--light-dark-grayish-blue);
                                padding: 0
                            }
                            .space button.active{
                                color: var(--primary-bright-blue)
                            }
                            .space button:hover{
                                color: var(--light-very-dark-grayish-blue)
                            }
                        `}</style>
                    </Card>
                </div>

                {/* <style jsx>{`
                    .list{
                        margin-top: -4.5rem
                    }     
                `}</style> */}
            </Container>
        </section>
        <footer>
            <Container>
                <p>Drag and drop to reorder list</p>
            </Container>
        </footer>
        </>
    );
}

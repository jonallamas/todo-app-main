// import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Container from '../components/container'
import Nav from '../components/nav'

import Card from '../components/card'
import Add from '../components/form/add'

export default function Home() {
    return (
        <>
        <Header>
            <Container>
                <Nav />
                <Card>
                    <Add />
                </Card>
            </Container>
        </Header>
        <section>
            <Container>
                <Card>
                    <div className="cardBody">
                        <ul className="todoList">
                            <li className="todo">
                                <input type="radio" />
                                <span>Esto es un texto</span>
                                <button type="button">
                                    <i className="icon iconClose" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="cardFooter">
                        <div className="space">
                            5 items left
                        </div>
                        <div className="space">
                            <button type="button" className="">
                                All
                            </button>
                            <button type="button" className="">
                                Active
                            </button>
                            <button type="button" className="">
                                Completed
                            </button>
                        </div>
                        <div className="space">
                            <button type="button" className="">
                                Clear Completed
                            </button>
                        </div>
                    </div>
                </Card>
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

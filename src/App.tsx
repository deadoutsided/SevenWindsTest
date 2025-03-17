import './App.style.scss'
import { Header } from './components/Header'
import { HierarchyList } from './components/HierarchyList'
import { SideNavbar } from './components/SideNavbar'

export function App() {

    return (
        <>
        <Header></Header>
        <main className='main'>
            <SideNavbar/>
            <HierarchyList/>
        </main>
        </>
    )
}

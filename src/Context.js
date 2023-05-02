import React, {useState, useContext} from 'react'


const ExportSmSidebar = React.createContext();

const Context = ({children}) =>{
    //State Values

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

    //Functions

    const openSideMenu = () =>{
        setIsSideMenuOpen(true)
    }

    const closeSideMenu = () =>{
        setIsSideMenuOpen(false)
    }

    return (
        <ExportSmSidebar.Provider 
        value ={{
            isSideMenuOpen,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </ExportSmSidebar.Provider>
    )
}

export const GlobalHook = () =>{
    return useContext(ExportSmSidebar)
};

export {ExportSmSidebar, Context}
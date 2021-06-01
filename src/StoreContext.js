// import React from 'react'
// import  Store  from './store'
// import  {useLocalObservable}  from 'mobx-react'

// const StoreContext = React.createContext(null)
// export const StoreProvider = ({ children }) => {
//     const store = useLocalObservable(Store)
//     return <StoreContext.Provider value={store}>
//         {children}
//     </StoreContext.Provider>
// }
// export const useNotesStore = () => React.useContext(StoreContext)
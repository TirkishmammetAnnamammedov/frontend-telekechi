// import Search from "../component/search/search.";
// import {render, screen} from '@testing-library/react';
// import { LanguageContext } from "./langContext";

// describe('example', () => {
//     test('renders Turkmen Ok', () => {
//         const wrapper = ({ children }) => (
//             <LanguageContext.Provider value={{language: 'Türkmen'}}>
//                 {children}
//             </LanguageContext.Provider>
//         );
//         render (
//           <>
//               <Search/>
//           </>
//             { wrapper }
//         );
//         expect(screen.getByText(/search/)).toBeInTheDocument();
//     });

//     test('renders Russian Ok', () => {
//         const wrapper = ({ children }) => (
//             <LanguageContext.Provider value={{language: ' Русский'}}>
//                 {children}
//             </LanguageContext.Provider>
//         );
//         render (
//           <>
//               <Search contentId="search"/>
//           </>
//             { wrapper }
//         );
//         expect(screen.getByText(/search/)).toBeInTheDocument();
//     });

// })
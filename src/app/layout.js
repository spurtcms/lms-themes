import Header from "@/Components/Header";
import "./globals.css";
import { Flip, ToastContainer, Zoom } from "react-toastify";
// import 'react-toastify/scss/main.scss'
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >
      {/* <ToastContainer
          transition={Zoom}
          theme="colored"
          position="top-right"
          autoClose={2000}
          limit={1}
          hideProgressBar={true}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        // transition={Flip}
        /> */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover={true}
            theme='colored'
            transition={Flip}
          />
        <Header />
        {children} 
      
      </body>
    </html>
  );
}

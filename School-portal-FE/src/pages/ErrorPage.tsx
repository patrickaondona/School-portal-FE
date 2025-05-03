
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error: unknown = useRouteError()
    console.log(error)
    console.log(isRouteErrorResponse(error))
    return (
        <div style={
           { display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            height: "100vh",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            padding: "20px",
            boxSizing: "border-box",
            margin: "0",
        }

        }>
            <p style={{fontWeight:"900"}}>Oopss!</p>
            <p>{isRouteErrorResponse(error) ? "Invalid Route" : "Page Not Found"}</p>
        </div>
    )
}

export default ErrorPage
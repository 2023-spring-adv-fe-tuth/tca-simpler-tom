import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const nav = useNavigate();

    return (
        <>
            <h1>
                Home
            </h1>
            <Button 
                type="primary" 
                block
                onClick={() => nav("/play")}
            >
                Play
            </Button>        
        </>
    );
};
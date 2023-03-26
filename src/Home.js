import { Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    return (
        <Space
            direction="vertical"
        >
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
            <br />        
            <Card>
                Total Games: { gameResults.length }
            </Card>
        </Space>
    );
};
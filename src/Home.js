import { Button, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    const winningPercentage = gameResults.length > 0
        ? (gameResults.filter(x => x).length / gameResults.length * 100).toFixed(2)
        : "n/a"

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
                <p>
                    Total Games: { gameResults.length }
                </p>
                <p>
                    Winning Percentage: { winningPercentage }
                </p>
            </Card>
        </Space>
    );
};
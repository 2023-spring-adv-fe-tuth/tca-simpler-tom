import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const Play = () => {

    const nav = useNavigate();

    const gameOver = (won) => {
        nav(-1);
    };

    return (
        <>
            <h1>
                Play
            </h1>
            <Space>
                <Button 
                    type="primary" 
                    block
                    onClick={() => gameOver(true)}
                >
                    I Won
                </Button>        
                <Button 
                    type="primary" 
                    block
                    onClick={() => gameOver(false)}
                >
                    I Lost
                </Button>        
            </Space>
        </>
    );
};
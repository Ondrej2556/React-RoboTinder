import {useState, useEffect} from 'react'
import RoboCard from "./RoboCard";
import { getData } from "../middleware/getRobotInfoAPI";

interface Data {
    id: number;
    name: string;
    email: string;
    phone: number;
    address: {
        street: string;
        suite: string;
        city: string;
        zip: string;
        geo: {
            lat:string;
            lng:string;
        }
    },
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    },
    usernames: string
    website: string
}


const MainContent = () => {
    const [robots, setRobots] = useState<Data[]> ([])

    
    useEffect(()=> {
        getRobotsData()
    }, [])

    const getRobotsData = async () => {
        const robotsData = await getData()
        setRobots(robotsData)
    }

    return (
        <div className="main-content">
            <h1>Meet The Robots</h1>
            <div className="inner-content">
                {robots?.map((robot) => (
                    <RoboCard key={robot.id} id={robot.id} name={robot.name} email={robot.email} phone={robot.phone} address1={robot.address.street} address2={robot.address.city}/>
                ))}
            </div>
        </div>
    );
};

export default MainContent;

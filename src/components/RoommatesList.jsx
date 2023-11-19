import { Stack } from "react-bootstrap"

import Roommate from "./Roommate";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const RoommatesList = () => {

    const [roommateList, setRoommateList] = useState({
        name: '',
        members: [],
        usernames: [],
        id: ''
    });

    async function handleReadTask() {
        let dataArray = [];
        let uid = '';
        if (auth.currentUser) {
            uid = auth.currentUser.uid;
        }

        const q = query(collection(db, 'groups'), where("members", "array-contains", uid) );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            setRoommateList(data);
        });
        console.log(roommateList)
    }

    useEffect(() => {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        sleep(500).then(() => handleReadTask());
        setInterval(() => {
                handleReadTask();
        }, 10000)
        return (() => clearInterval())
    }, []);

    return (
        <Stack gap={2}>
        {
            roommateList.usernames.map((data) => {
                    return (<Roommate key={data.id} data={data} />)
            })
        }
        <a href="/manageroommates" className="btn btn-primary" style={{width: 90}}>Manage</a>
        </Stack>
    );
    // return (
    // <Stack gap={1}>
    //     <Roommate/>
    //     <Roommate />
    //     <Roommate />
    //     <a href="/manageroommates" className="btn btn-primary" style={{width: 200}}>Manage Roommates</a>
    // </Stack>
    // );
}

export default RoommatesList;
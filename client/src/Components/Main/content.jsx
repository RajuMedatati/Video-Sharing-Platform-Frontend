import React, { useEffect, useState } from "react";
import Card from "./Navbar/Card";
import "./Content.css"
import axios from "axios";
const Content = () => {
    const [banner, setBanner] = useState("");
    const [name, setName] = useState("View all");
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/home")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
                window.alert("something went wrong")

            })
    }, []);
    
    const handleViewButton = () => {
        if (banner) {
            setBanner("")
        } else {
            setBanner("class")
        }
        if (name == "View all") {
            setName("View less")
        } else {
            setName("View all")
        }
    }
    console.log(data[1])
   
    return (<>
        <div className={`banner${banner}`}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pQUaDV2El5BJe0sxXeLNjwzl2WkwudOkmIuIe94Tcg&s"  alt="img not found"/>
            <div className="details">
                <h1>hiiiiii</h1>
                
                <div className="span">
                    <span>27 March 2023</span>
                    <span>15 mins</span>
                    <span>200 views</span>
                </div>

            </div>
            {!banner ?
                <div className="title">
                    <h1>GODZILLA</h1>

                </div> : ""}

        </div>
        <div className="video-content">
            <div className="btns">
                <div className="recent">
                    Recent
                </div>
                <div className="view-all" onClick={handleViewButton}>
                    {name}
                </div>

            </div>
            <div className="videos">
                
                {
                    data.map((data) => {
                       return <Card data={data} />
                    })

                }

            </div>

        </div>


    </>
    )
}
export default Content;
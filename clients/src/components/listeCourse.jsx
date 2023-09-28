import { useState } from "react"

export default function DisplayList(){
    const [listeCourse, setListCourse] = useState([])

    const fakelisteCourse = useState([])
    return(
        <div>
            <h1>Display List</h1>
            <ul>
                {listeCourse.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
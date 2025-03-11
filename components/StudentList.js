export default function StudentList() {
    const listItems = students.map(stu => <li> 
        <ul> 
            <li> Name :  {stu.name} </li> 
            <li>Age : {stu.age}</li>
            <li> Grade : {stu.grade}</li>
            <li><button>View Details</button></li>
            <br></br>
        </ul> 
    </li>);
    return <ul>{listItems}</ul>; 
}

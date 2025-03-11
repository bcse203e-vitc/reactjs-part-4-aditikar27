
export default function studentForm(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      };
    return <>
    <form>
        <label for="name">Name</label><br></br>
        <input type="text" id="name"></input> <br></br> <br></br>

        <label for="age">Age</label><br></br>
        <input type="number" id="age"></input> <br></br> <br></br>

        <label for="grade">Grade</label> <br></br> 
        <input type="text" id="grade"></input>

        <button type="submit" onClick={handleSubmit} > Submit </button>
    </form>
    </>
}

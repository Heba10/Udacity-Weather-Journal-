
const apiKey = "&appid=7ad0d197f92a0ed3d5e8273e50ec0d67&units=imperial";

const apiUrl = "http://localhost:4800/";





// Event listener 
document.getElementById('generate').addEventListener('click', Generate);


function Generate() {
    let data = {
        Code: document.getElementById('zip').value,
        content: document.getElementById('feelings').value,
        date: new Date()
    };

  
    getCode(data.Code).then(Info => {
      
        if (Info.cod != 200)
            return alert(Info.message)

        data.temp = Info.list[0].main.temp;
        postDate(data);
    });
};


async function getCode(Code) {
    return await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${Code}${apiKey}`)).json()
}

async function update() {
    let response = await fetch(`${apiUrl}All`);
   
        response.json().then(data => {
            document.getElementById('date').innerHTML = `Date : ${data.date}`;
            document.getElementById('temp').innerHTML = `Temp : ${data.temp}`;
            document.getElementById('content').innerHTML = `Feelings : ${data.content}`;
        });
   
}

async function postDate(data) {
    let response = await fetch(`${apiUrl}postData`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    
        if (!response.ok) {
            alert('Not Successfuly');
            return;
        }
       
        response.json().then(data => {
            if (response.ok)
                update();
            else
                alert('Not Successfuly');
        });

    
}



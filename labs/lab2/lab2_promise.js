/* 
Purpose:
create a new promise - API developer side 
Fetch that promise - Web developer side
- async definition of the function that contains  the fetch 
- await in front of the fetch 
*/

// -------------------API Developer side----------------------

async function fetch_weather(){
    const promise_weather = new Promise((resolve, reject) => {
        let isPaidMember = false
        if (isPaidMember) {
            setTimeout(() => {
            const weatherJSON = { monday :"sunny", tuesday: "rainy"}
            let weatherJSONstr = JSON.stringify(weatherJSON)
            resolve(weatherJSONstr)

            }, 2000)

        }
        else {
            reject("you must be a paid member to access")
        }
    })
    let result = await promise_weather
    console.log(result)

}

fetch_weather()

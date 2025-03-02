const apiUrl = "https://dice-roller-aa-ddcbg9gmf8ddgzdu.uaenorth-01.azurewebsites.net/roll";
const corsTestUrl = "https://dice-roller-aa-ddcbg9gmf8ddgzdu.uaenorth-01.azurewebsites.net/cors-fail";

async function rollDice() {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Server Error");

        let data = await response.json();
        document.getElementById("result").textContent = `🎲 Roll Result: ${data.roll}`;
        document.getElementById("error").textContent = "";
    } catch (error) {
        document.getElementById("error").textContent = "Failed to fetch dice roll";
    }
}

async function testCORS() {
    try {
        let response = await fetch(corsTestUrl);
        if (!response.ok) throw new Error("CORS error");

        let data = await response.json();
        document.getElementById("error").textContent = `CORS Response: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById("error").textContent = "CORS Policy Violation!";
    }
}

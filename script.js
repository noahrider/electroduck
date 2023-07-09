document.addEventListener("DOMContentLoaded", function() {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const prompt = document.getElementById("prompt");

    // Hide the prompt initially
    prompt.style.display = "none";

    // Startup message
    output.innerHTML += "Starting DOM-DOS<br>";
    setTimeout(function() {
        output.innerHTML += "<i>Type in help for more.</i>";
        setTimeout(function() {
        output.innerHTML += "<br><br>DOM-DOS is testing extended memory... ";
        setTimeout(function() {
            output.innerHTML += "done.<br>";
            setTimeout(function() {
                prompt.style.display = "inline"; // Show the prompt after a delay
            }, 500);
        }, 2000);
    }, 3000);
}, 1000);


    commandInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleCommand(commandInput.value.trim());
            commandInput.value = "";
        }
    });

    function handleCommand(command) {
        output.innerHTML += `<span class="command-line">C:>${command}</span><br>`;
        if (command === "read apple-collection.txt") {
            output.innerHTML += "APPLE COLLECTION:<br>Nothing here... yet.";
        } else if (command === "read cameras.txt") {
            output.innerHTML += "CAMERA COLLECTION:<br>Canon PowerShot [WORKING]<br>Nixon CoolPix [WORKING]";
        } else if (command === "read contact.txt") {
            output.innerHTML += "CONTACT:<br>dominic@electroduck.net (me)<br>dev@noahrider.com (webmaster)";
        } else if (command === "READ apple-collection.txt") {
                output.innerHTML += "APPLE COLLECTION:<br>Nothing here... yet.";
            } else if (command === "READ cameras.txt") {
                output.innerHTML += "CAMERA COLLECTION:<br>Canon PowerShot [WORKING]<br>Nixon CoolPix [WORKING]";
            } else if (command === "READ contact.txt") {
                output.innerHTML += "CONTACT:<br>dominic@electroduck.net (me)<br>dev@noahrider.com (webmaster)";
        } else if (command === "help") {
            output.innerHTML += "Commands:<br>READ: read a file (eg: read contact.txt <br>Files: apple-collection.txt, cameras.txt, contact.txt";
        } else if (command === "credits") {
            output.innerHTML += "Website created by Noah Rider [dev@noahrider.com]";
        } else {
            output.innerHTML += "Command not recognized.<br>";
        }
    }
});

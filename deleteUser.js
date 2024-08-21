// js/deleteUser.js

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const username = document.getElementById("other-username").value;

        // Validate username
        if (!username) {
            alert("Please enter a username.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:4001/auth/delete/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // Notify user of success
            } else {
                alert(result.message); // Notify user of error
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while trying to delete the user.");
        }
    });
});

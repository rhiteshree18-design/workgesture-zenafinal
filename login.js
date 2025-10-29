document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const text = await response.text();

        if (response.ok) {
            alert("✅ Login successful!");
            // ✅ Save login state BEFORE redirect
            localStorage.setItem("isLoggedIn", "true");
            console.log("Saved login state:", localStorage.getItem("isLoggedIn"));

            // ✅ Redirect after saving
            window.location.href = "index.html";
        } else {
            alert("❌ " + text);
        }
    } catch (error) {
        console.error("⚠️ Network error:", error);
        alert("⚠️ Unable to connect to the server.");
    }
});

function updateTime() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Paris",
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const formattedDate = formatter.format(now);
    const parts = formattedDate.split(' ');

    const month = `<strong>${parts[1]}</strong>`;
    const day = `<strong>${parts[2]}</strong>`;
    const year = `<strong>${parts[3]}</strong>`;
    const weekday = `<strong>${parts[0]}</strong>`
    const city = "Paris";
    const cityText = ` (${city})`;
    
    const finalText = `${weekday} ${month} ${day} ${year} ${parts.slice(4).join(' ')} ${cityText}`;

    document.getElementById("time").innerHTML = finalText;
}

setInterval(updateTime, 1000);

updateTime();

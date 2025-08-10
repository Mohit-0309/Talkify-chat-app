export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        // second: false,
        hour12: true,
    });
}
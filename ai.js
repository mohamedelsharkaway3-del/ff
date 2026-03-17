// Motivational messages
const fabBtn = document.getElementById('fab-btn');
fabBtn.addEventListener('click', () => {
  const messages = [
    "Stay productive 💪",
    "You can achieve anything today!",
    "Focus on what matters most!",
    "Consistency is key 🔑",
    "Lead your team to success!"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
});

// AI Assistant Placeholder
async function aiAssistant(query) {
  // Replace with real GPT API integration
  // Example using fetch:
  /*
  const response = await fetch('/api/gpt', {
    method: 'POST',
    body: JSON.stringify({ prompt: query })
  });
  const data = await response.json();
  return data.reply;
  */
  return `AI Tip: Work efficiently on "${query}"`;
}

// Example usage
aiAssistant("team tracking").then(console.log);

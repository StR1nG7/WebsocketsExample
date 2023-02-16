const statusEl = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => statusEl.innerHTML = 'ONLINE';
ws.onclose = () => statusEl.innerHTML = 'DISCONNECTED';

ws.onmessage = response => {
    const li = document.createElement('li');

    li.innerHTML = response.data;
    messages.appendChild(li);
};

form.addEventListener('submit', event => {
    event.preventDefault();

    ws.send(input.value);
    input.value = '';
});
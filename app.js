setInterval(() => {
	let date = new Date();
	const hours = date.getHours();
	const mins = date.getMinutes();
	const secs = date.getSeconds();

	const h = document.getElementById('hour');
	const m = document.getElementById('minute');
	const s = document.getElementById('seconds');

	const hDeg = 30 * hours + mins/2;
	const mDeg = 6 * mins;
	const sDeg = 6 * secs;

	h.style.transform = `rotate(${hDeg}deg)`;
	m.style.transform = `rotate(${mDeg}deg)`;
	s.style.transform = `rotate(${sDeg}deg)`;
}, 1000)
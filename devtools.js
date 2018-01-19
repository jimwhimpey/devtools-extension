fetch(`/style.css`)
	.then(res => res.text())
	.then(styles => chrome.devtools.panels.applyStyleSheet(styles))
	.catch(e => console.error(e));
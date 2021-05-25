const capitalize = document.getElementById('capitalize');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const titleCase = document.getElementById('titleCase');

const textArea = document.getElementById('textArea');
let noWords = document.getElementById('noWords');
let noCharacters = document.getElementById('noCharacters');
const copyToClipboard = document.getElementById('copyToClipboard');

textArea.addEventListener('keyup', () => {
	let textAreaText = textArea.value;
	numberOfWordsEntered = v.countWords(textAreaText);
	numberOfCharactersEntered = textArea.value.split(' ').join('').length;
	noWords.innerHTML = numberOfWordsEntered;
	noCharacters.innerHTML = numberOfCharactersEntered;
});
copyToClipboard.addEventListener('click', function (event) {
	let textAreaText = textArea.value;
	if (textAreaText) {
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand('copy');
			if (successful) {
				copyToClipboard.innerText = 'Copied!';
			} else {
				copyToClipboard.innerText = 'Copied!';
			}
		} catch (err) {
			console.log('Oops, unable to copy');
		}
	} else {
		alert('write something.....');
	}
});
const funcapitalize = () => {
	let textAreaText = textArea.value;
	if (textAreaText) {
		textAreaCapText = v.capitalize(textAreaText);
		textArea.value = textAreaCapText;
	}
};

const funupperCase = () => {
	let textAreaText = textArea.value;
	if (textAreaText) {
		textAreaCapText = v.upperCase(textAreaText);
		textArea.value = textAreaCapText;
	}
};

const funlowerCase = () => {
	let textAreaText = textArea.value;
	if (textAreaText) {
		textAreaCapText = v.lowerCase(textAreaText);
		textArea.value = textAreaCapText;
	}
};

const funtitleCase = () => {
	let textAreaText = textArea.value;
	if (textAreaText) {
		textAreaCapText = v.titleCase(textAreaText);
		textArea.value = textAreaCapText;
	}
};

capitalize.addEventListener('click', funcapitalize);
upperCase.addEventListener('click', funupperCase);
lowerCase.addEventListener('click', funlowerCase);
titleCase.addEventListener('click', funtitleCase);


const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach((child) => htmlElement.removeChild(child))
    }
    let paragraph = document.createElement('p');
    // let content = document.createTextNode(string)
    paragraph.innerHTML = string;
    htmlElement.append(paragraph);
};

htmlGenerator('Party Time.', partyHeader);

// HTMLElementObject.innerHTML = text
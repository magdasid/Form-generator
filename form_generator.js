const data = 
{
    "fields": [
        {
            "label": "Full name",
            "required": true, 
            "type": "text", 
            "field_name": "full_name"
        }, 
        {
            "label": "Company", 
            "required": true, 
            "type": "text", 
            "field_name": "company"
        }, 
        {
            "label": "Phone number", 
            "required": false, 
            "type": "text", 
            "field_name": "phone"
        },
    ], 
    "submit_text": "Submit data", 
    "url": "https://httpbin.org/post", 
    "method": "POST"
};

const generateForm = (data) => {
    const { fields, url, method } = data;
    const container = document.getElementById("form_container");
    
    let form = document.createElement("form");
    form.setAttribute("action", url);
    form.setAttribute("method", method);
    form.classList.add('main-form');

    fields.forEach((element) => {
        let { label, required, type, field_name } = element;
        
        let labelName = document.createElement("label");
        
        labelName.innerHTML = `${label}`;
        (required) ? labelName.innerHTML += '*' : labelName.innerHTML +='';

        let input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", field_name);
        input.setAttribute("required", required);
        
        form.append(labelName, input);

    });
    let button = document.createElement('button');
    button.appendChild(document.createTextNode("submit data"));       
    form.appendChild(button);
    container.appendChild(form);
}

generateForm(data);
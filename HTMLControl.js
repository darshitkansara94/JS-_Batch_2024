function CreateLabel() {
    var label = document.createElement('label');

    var InnerText = document.createTextNode('Testing Text');

    label.appendChild(InnerText);

    label.title = "This is dynamic label";

    label.id = "lbl_Id"

    document.getElementById('dvElement').appendChild(label);

    // document.body.appendChild(label);
}
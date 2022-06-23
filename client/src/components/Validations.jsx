const validations = (inputs) => {
    let errors = {};
    if(!inputs.name) {
        errors.name = "Name is required";}
    if(inputs.name.search("[0-9]") !== -1 ) {
    errors.name = "The name must not have numbers";}
    if(inputs.name.search("[^A-Za-z0-9_]") !== -1) {
        errors.name = "The name must not have symbols";} 
    if(inputs.secondType === "" && inputs.firstType === "")  {
        errors.types = "At least one type is required";} 
    if(inputs.health > 300 || inputs.health <= 0) {
        errors.health = "Value must be greater than 0 and less than 300";}
    if(inputs.attack > 200 || inputs.attack <=  0) {
        errors.attack = "Value must be greater than 0 and less than 200";}
    if(inputs.defense > 300 || inputs.defense <=  0) {
        errors.defense = "Value must be greater than 0 and less than 300";}
    if(inputs.speed > 200 || inputs.speed <=  0) {
        errors.speed = "Value must be greater than 0 and less than 200";} 
    if(inputs.height > 20 || inputs.height <=  0) {
        errors.height = "Value must be greater than 0 and less than 20";}
    if(inputs.weight > 999 || inputs.weight <=  0) {
        errors.weight = "Value must be greater than 0 and less than 999";}
    return errors;
};

export default validations;
function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}
function equal(){
    try{
    document.form.textview.value = eval(document.form.textview.value);
    }
    catch(e){
        document.form.textview.value="Invalid Input";
    }
}
function clear_screen(){
    document.form.textview.value='';
}
function delete_one(){
    document.form.textview.value=document.form.textview.value.slice(0,-1);
}
function logarithm(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.log(document.form.textview.value);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
function power(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.pow(document.form.textview.value,2);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
function sine(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.sin(document.form.textview.value);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
function cosine(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.cos(document.form.textview.value);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
function tangent(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.tan(document.form.textview.value);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
function sq_root(){
    try{
        document.form.textview.value = eval(document.form.textview.value);
        document.form.textview.value = Math.sqrt(document.form.textview.value);
        }
        catch(e){
            document.form.textview.value="Invalid Input";
        }
}
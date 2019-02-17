
var str = prompt("type...", str)
var mark = ""

for(var i = 0; i < str.length; i++) {
  if(str[i] == str[str.length - i - 1]) {
    mark = "palyndrome"
  }
  else {
    mark = "not a palyndrome"
  }
}
alert(str + " " + mark)

document.body.innerHTML = "<style>
body{
background-color:black;
color:white;
}
input {
 border-color:black;
 background-color:black;
 color:white;
}
.beta {
	color:white;
  border: 2px solid #abff94;
  border-radius: 8px;
  border-left: 2px solid #abff94;
  position: absolute;
  top: 50%;
}
	
button {
	background-color:#2bc6ff;
	border-radius:10px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Trebuchet MS;
	font-size:22px;
	font-weight:bold;
	padding:15px 31px;
	text-decoration:none;
}
button:hover {
	background-color:#1698c7;
}
button:active {
	position:relative;
	top:1px;
}

        .Label--green, .Label--outline-green {
    color: #3af064;
    border-color: #28a745;
}
.Label--inline {
    display: inline;
    padding: .1667em .5em;
        padding-right: 0.5em;
        padding-left: 0.5em;
    font-size: .9em;
}
.label, .Label {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border-radius: 2em;
    background-color: initial !important;
    border: 1px solid #e1e4e8;
        border-top-color: rgb(225, 228, 232);
        border-right-color: rgb(225, 228, 232);
        border-bottom-color: rgb(225, 228, 232);
        border-left-color: rgb(225, 228, 232);
}
.px-1 {
    padding-right: 4px !important;
}
.pl-1, .px-1 {
    padding-left: 4px !important;
}
.ml-1 {
    margin-left: 4px !important;
}
* {
    box-sizing: border-box;
}
.Box-row {
    list-style-type: none;
}
body {
    word-wrap: break-word;
}
body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
}
margin
border
padding
27.5167×16
37.5167×22.2
static
    box-sizing
    border-box
    display
    inline
    float
    none
    line-height
    18px
    position
    static
    z-index
    auto


  
</style>
<body>
<span title="Feature Release Label: Beta" class="Label Label--outline-green Label--inline ml-1 px-1">Beta</span>
<br>
<input id='txt1' required placeholder='Project Name'>
<br>
<input id='txt2' required placeholder='Author'>
<br>
<button type='submit' onclick='submit()'>View</button>
<br>
<iframe src='https://snapcups.github.io/SnapCups/other/Find2.html' id='if' width='500' height='500'></iframe>
<br>
	<a href='about:blank' target='_blank' id='full' style='color:white'>Fullscreen</a> <br>
	<a href='about:blank' target='_blank' id='pro' style='color:white'>See Project Page</a> <br>
	<a href='about:blank' target='_blank' id='aut' style='color:white'>Author</a> <br>
<script>
function submit(){
document.getElementById('if').src=
"https://snap.berkeley.edu/embed?project="+
document.getElementById('txt1').value+
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true"
	/*Full*/
document.getElementById('full').href=
"https://snap.berkeley.edu/embed?project="+
document.getElementById('txt1').value+
"&user="+
document.getElementById('txt2').value+
"&showTitle=true&showAuthor=true&editButton=true&pauseButton=true"
	
	/*Pro*/
document.getElementById('pro').href=
"https://snap.berkeley.edu/project?user="+
document.getElementById('txt2').value+
"&project="+
document.getElementById('txt1').value+
""
	/*aut*/
document.getElementById('aut').href=
"https://snap.berkeley.edu/user?user="+
document.getElementById('txt2').value+
	""

	
}
</script>
</body>
";

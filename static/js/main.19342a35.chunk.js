(this.webpackJsonpjulekurs=this.webpackJsonpjulekurs||[]).push([[0],{357:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(53),a=n.n(i),l=(n(67),n(8)),s=n(9),c=n(14),d=n(11),u=n(2),p=n.n(u),f=n(6),h=n(5),b=n(17),g=n(7),m=n(21),x=n(61),j=n(359),k=n(54),y=n(4),v=n.n(y);n(43);v.a.Blocks.speed={init:function(){this.appendDummyInput().appendField("hastighet").appendField(new v.a.FieldNumber(5),"SPEED"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Endre hastigheten p\xe5 avataren (0 er superraskt)")}},v.a.Python.speed=function(e){var t=e.getFieldValue("SPEED");return"speed(".concat(t,")\n")},v.a.Blocks.forward={init:function(){this.appendDummyInput().appendField("fremover").appendField(new v.a.FieldNumber(100),"DISTANCE"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren fremover")}},v.a.Python.forward=function(e){var t=e.getFieldValue("DISTANCE");return"forward(".concat(t,")\n")},v.a.Blocks.backward={init:function(){this.appendDummyInput().appendField("bakover").appendField(new v.a.FieldNumber(100),"DISTANCE"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren bakover")}},v.a.Python.backward=function(e){var t=e.getFieldValue("DISTANCE");return"backward(".concat(t,")\n")},v.a.Blocks.goto={init:function(){this.appendDummyInput().appendField("g\xe5 til x:").appendField(new v.a.FieldNumber(0),"X").appendField("y:").appendField(new v.a.FieldNumber(0),"Y"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren til en posisjon")}},v.a.Python.goto=function(e){var t=e.getFieldValue("X"),n=e.getFieldValue("Y");return"goto(".concat(t,", ").concat(n,")\n")},v.a.Blocks.gotoRandom={init:function(){this.appendDummyInput().appendField("g\xe5 til tilfeldig posisjon"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren til en tilfeldig posisjon p\xe5 bildet")}},v.a.Python.gotoRandom=function(){return"goto(int(400 * random() - 200), int(400 * random() - 200))\n"},v.a.Blocks.circle={init:function(){this.appendDummyInput().appendField("g\xe5 i sirkel"),this.appendDummyInput().appendField("radius:").appendField(new v.a.FieldNumber(100),"RADIUS"),this.appendDummyInput().appendField("vinkel:").appendField(new v.a.FieldNumber(360),"ANGLE").appendField("grader"),this.appendDummyInput().appendField("med klokka \u21bb").appendField(new v.a.FieldCheckbox(!0),"DIRECTION"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren i en sirkel")}},v.a.Python.circle=function(e){var t=e.getFieldValue("RADIUS"),n=e.getFieldValue("ANGLE"),o="TRUE"===e.getFieldValue("DIRECTION")?-1:1;return"circle(".concat(o*t,",").concat(n,")\n")},v.a.Blocks.right={init:function(){this.appendDummyInput().appendField("roter \u21bb").appendField(new v.a.FieldNumber(90),"DEGREES").appendField("grader"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Roter avataren til h\xf8yre")}},v.a.Python.right=function(e){var t=e.getFieldValue("DEGREES");return"right(".concat(t,")\n")},v.a.Blocks.left={init:function(){this.appendDummyInput().appendField("roter \u21ba").appendField(new v.a.FieldNumber(90),"DEGREES").appendField("grader"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Roter avataren til venstre")}},v.a.Python.left=function(e){var t=e.getFieldValue("DEGREES");return"left(".concat(t,")\n")},v.a.Blocks.sideways={init:function(){this.appendDummyInput().appendField("sidelengs").appendField(new v.a.FieldNumber(100),"DISTANCE"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(900),this.setTooltip("Flytt avataren sidelengs")}},v.a.Python.sideways=function(e){var t=e.getFieldValue("DISTANCE");return"sideways(".concat(t,")\n")},v.a.Blocks.color={init:function(){this.appendDummyInput().appendField("sett farge").appendField(new v.a.FieldColour("#ff0000"),"COLOR"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Skift farge p\xe5 streken")}},v.a.Python.color=function(e){var t=e.getFieldValue("COLOR");return'color("'.concat(t,'")\n')},v.a.Blocks.randomColor={init:function(){this.appendDummyInput().appendField("sett en tilfeldig farge"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Skift farge p\xe5 streken til en tilfeldig farge")}},v.a.Python.randomColor=function(){return"color(random(), random(), random())\n"},v.a.Blocks.penUp={init:function(){this.appendDummyInput().appendField("ta opp pennen"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Ikke tegne mens avataren beveger seg")}},v.a.Python.penUp=function(){return"up()\n"},v.a.Blocks.penDown={init:function(){this.appendDummyInput().appendField("ta ned pennen"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Tegne mens avataren beveger seg")}},v.a.Python.penDown=function(){return"down()\n"},v.a.Blocks.penSize={init:function(){this.appendDummyInput().appendField("set penst\xf8rrelse til").appendField(new v.a.FieldNumber(5),"SIZE"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Endre st\xf8rrelsen p\xe5 pennen")}},v.a.Python.penSize=function(e){var t=4*e.getFieldValue("SIZE");return"pensize(".concat(t,")\n")},v.a.Blocks.begin_fill={init:function(){this.appendDummyInput().appendField("start fyll"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Start \xe5 fylle et omr\xe5de med farge")}},v.a.Python.begin_fill=function(){return"begin_fill()\n"},v.a.Blocks.end_fill={init:function(){this.appendDummyInput().appendField("slutt fyll"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(280),this.setTooltip("Slutt \xe5 fylle et omr\xe5de med farge")}},v.a.Python.end_fill=function(){return"end_fill()\n"},v.a.Blocks.hideturtle={init:function(){this.appendDummyInput().appendField("skjul avatar"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(180),this.setTooltip("Ikke vis avataren mens den tegner")}},v.a.Python.hideturtle=function(){return"hideturtle()\n"},v.a.Blocks.showturtle={init:function(){this.appendDummyInput().appendField("vis avatar"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(180),this.setTooltip("Vis avataren mens den tegner")}},v.a.Python.showturtle=function(){return"showturtle()\n"},v.a.Blocks.shape={init:function(){this.appendDummyInput().appendField("endre avatar til").appendField(new v.a.FieldDropdown([["\ud83e\udd36","nisse-old-female"],["\ud83c\udf85","nisse-old-male"],["\ud83d\udc22","turtle"],["\u25b6","triangle"],["\u26aa","circle"],["\u2b1c","square"]]),"SHAPE"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(180),this.setTooltip("Endre avataren")}},v.a.Python.shape=function(e){var t=e.getFieldValue("SHAPE");return'shape("'.concat(t,'")\n')},v.a.Blocks.stamp={init:function(){this.appendDummyInput().appendField("stemple avataren"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(180),this.setTooltip("Stemple en kopi av avataren p\xe5 tegningen p\xe5 n\xe5v\xe6rende posisjon")}},v.a.Python.stamp=function(){return"stamp()\n"},v.a.Blocks.male={init:function(){this.appendDummyInput().appendField("endre til \ud83c\udf85"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setColour(220),this.setTooltip("Endre avataren sitt kj\xf8nn til mann")}},v.a.Python.male=function(){return'shape("nisse-old-male")\n'},v.a.Msg.CONTROLS_REPEAT_TITLE="gjenta %1 ganger",v.a.Msg.CONTROLS_REPEAT_TOOLTIP="Kj\xf8r blokkene inne i denne blokken gjentatte ganger";var O,w,C,S,P,F=n(18),E=n(55),I="from random import *\nfrom math import *\nfrom turtle import *\n\ndef sideways(distance):\n  direction = (heading() + 90) * pi / 180\n  [x, y] = pos()\n  goto(x + distance * cos(direction), y + distance * sin(direction))\n\n",N='screen = Screen()\nscreen.setworldcoordinates(-200, -200, 200, 200)\nscreen.register_shape("nisse-old-female")\nscreen.register_shape("nisse-old-male")\nscale = lambda a: list(map(lambda x:[x[0]*3,x[1]*3],a))\nscreen.register_shape("arrow", scale([[-10,0],[10,0],[0,10]]))\nscreen.register_shape("square", scale([[10,-10],[10,10],[-10,10],[-10,-10]]))\nscreen.register_shape("triangle", scale([[10,-5.77],[0,11.55],[-10,-5.77]]))\nscreen.register_shape("classic", scale([[0,0],[-5,-9],[0,-7],[5,-9]]))\nscreen.register_shape("turtle", scale([[0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-5,-3],[-8,-6],[-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1],[6,5],[9,8],[7,9],[4,7],[1,10],[2,14]]))\nscreen.register_shape("circle", scale([[10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09,9.51],[-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8.09,-5.88],[-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8.09],[8.09,-5.88],[9.51,-3.09]]))\nshape("nisse-old-male")\npensize(4 * pensize())\n\n',D=n.n(E)()((function(e){return{preDefinedPythonCode:I,extraPythonCodeForTheBrowserRendering:N,pythonErrorLineNumberOffset:I.split("\n").length+N.split("\n").length-2,pythonCode:localStorage.getItem("pythonCode")||'from random import *\nfrom turtle import *\n\ncolor("red")\nforward(100)\nleft(45)\nforward(100)\n',setPythonCode:function(t){localStorage.setItem("pythonCode",t),e((function(){return{pythonCode:t}}))},javascriptCode:localStorage.getItem("javascriptCode")||"",setJavascriptCode:function(t){localStorage.setItem("javascriptCode",t),e((function(){return{javascriptCode:t}}))},blocklyPythonCode:localStorage.getItem("blocklyPythonCode")||"",setBlocklyPythonCode:function(t){localStorage.setItem("blocklyPythonCode",t),e((function(){return{blocklyPythonCode:t}}))},downloadablePythonCode:localStorage.getItem("downloadablePythonCode")||"",setDownloadablePythonCode:function(t){localStorage.setItem("downloadablePythonCode",t),e((function(){return{downloadablePythonCode:t}}))},blocklyXml:localStorage.getItem("blocklyXml")||'<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_repeat" id="*Q4b-j2Gk=+EI9YKue+?" x="70" y="50"><field name="TIMES">3</field><statement name="DO"><block type="farge" id="m_}Q/PVE/?FoO*BP)l,H"><field name="COLOR">#ff0000</field><next><block type="fremover" id="ZlXa=;^K)n33zp(9fl)~"><field name="DISTANCE">100</field><next><block type="venstre" id=",zS%5o$YQQm8/-Sya8-n"><field name="DEGREES">90</field><next><block type="fremover" id="it;=-):3J-?U/!lQU.7U"><field name="DISTANCE">100</field><next><block type="farge" id="U0k:h`P{X[8Ed0X^i$_F"><field name="COLOR">#000000</field><next><block type="venstre" id="=o)rvJ_(}bB(;q?9X3RQ"><field name="DEGREES">90</field><next><block type="fremover" id="Z],D3OV-w|#N_wDG(eW}"><field name="DISTANCE">100</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>',setBlocklyXml:function(t){localStorage.setItem("blocklyXml",t),e((function(){return{blocklyXml:t}}))},editorMode:localStorage.getItem("editorMode")||"blockly",setEditorMode:function(t){localStorage.setItem("editorMode",t),e((function(){return{editorMode:t}}))},editor:null,setEditor:function(t){return e((function(){return{editor:t}}))},isPythonCodeEditable:localStorage.getItem("isPythonCodeEditable")||!0,setIsPythonCodeEditable:function(t){localStorage.setItem("isPythonCodeEditable",t),e((function(){return{isPythonCodeEditable:t}}))},canvas:null,setCanvas:function(t){return e((function(){return{canvas:t}}))},canvasColor:localStorage.getItem("canvasColor")||"#ffffff",setCanvasColor:function(t){null!==t&&"null"!==t||(t="#ffffff"),localStorage.setItem("canvasColor",t),e((function(){return{canvasColor:t}}))},log:[],addLog:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e((function(e){return{log:[{content:t,error:n}].concat(Object(F.a)(e.log))}}))},error:null,setError:function(t){return e((function(){return{error:t}}))},clearError:function(){return e((function(){return{error:null}}))}}})),T={small:Object(s.a)(O||(O=Object(l.a)(["\n    --shadow-color: #0002;\n    box-shadow: 0 1px 1px var(--shadow-color);\n  "]))),medium:Object(s.a)(w||(w=Object(l.a)(["\n    --shadow-color: #0002;\n    box-shadow: 0 1px 1px var(--shadow-color), 0 2px 2px var(--shadow-color), 0 4px 4px var(--shadow-color);\n  "]))),large:Object(s.a)(C||(C=Object(l.a)(["\n    --shadow-color: #0002;\n    box-shadow: 0 1px 1px var(--shadow-color), 0 2px 2px var(--shadow-color), 0 4px 4px var(--shadow-color),\n      0 8px 8px var(--shadow-color), 0 16px 16px var(--shadow-color);\n  "])))},R=n(1),B=["above","below","language"],L=["above","below"],_=Object(j.a)({L:1016,S:1015}),M=function(e){return"L"===e?"calc(100vh - 240px)":"max(400px, calc(50vh - 32px - 14px))"};function V(e){var t=e.above,n=e.below,o=e.language,r=void 0===o?"python":o,i=Object(m.a)(e,B),a=D((function(e){return e.pythonCode})),l=D((function(e){return e.setDownloadablePythonCode})),s=D((function(e){return e.setPythonCode})),c=D((function(e){return e.javascriptCode})),d=D((function(e){return e.setJavascriptCode})),u=D((function(e){return e.isPythonCodeEditable})),p=D((function(e){return e.setEditor})),f=_();return Object(R.jsxs)(W,{children:[t,Object(R.jsx)(x.a,Object(g.a)(Object(g.a)({height:M(f),width:"max(400px, calc(100vw - 32px - 14px))",theme:"vs-dark",language:r,value:"python"===r?a:c,onChange:function(e){"python"===r?(s(e),l(e)):d(e)},className:"monaco-editor",onMount:function(e){p(e);var t=e.getContribution("editor.contrib.messageController");e.onDidAttemptReadOnlyEdit((function(){t.showMessage("Du kan ikke endre koden akkurat n\xe5",e.getPosition())}))}},i),{},{options:Object(g.a)({scrollBeyondLastLine:!1,wordWrap:!0,automaticLayout:!0,renderWhitespace:"boundary",readOnly:!u,scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1}},i.options||{})})),n]})}var A={kind:"flyoutToolbox",contents:[{kind:"label",text:"Bevegelse \ud83c\udfc3\u200d\u2640\ufe0f"},{kind:"block",type:"speed",gap:"4px"},{kind:"block",type:"forward",gap:"4px"},{kind:"block",type:"backward",gap:"4px"},{kind:"block",type:"sideways",gap:"4px"},{kind:"block",type:"right",gap:"4px"},{kind:"block",type:"left",gap:"4px"},{kind:"block",type:"goto",gap:"4px"},{kind:"block",type:"gotoRandom",gap:"4px"},{kind:"block",type:"circle"},{kind:"label",text:"Tegning og farger \ud83c\udfa8"},{kind:"block",type:"color",gap:"4px"},{kind:"block",type:"randomColor",gap:"4px"},{kind:"block",type:"penSize",gap:"4px"},{kind:"block",type:"penUp",gap:"4px"},{kind:"block",type:"penDown",gap:"4px"},{kind:"block",type:"begin_fill",gap:"4px"},{kind:"block",type:"end_fill"},{kind:"label",text:"Repetisjon \ud83d\udd01"},{kind:"block",type:"controls_repeat"},{kind:"label",text:"Endre avatar \ud83e\udd36\ud83c\udf85"},{kind:"block",type:"showturtle",gap:"4px"},{kind:"block",type:"hideturtle",gap:"4px"},{kind:"block",type:"shape",gap:"4px"},{kind:"block",type:"stamp"}]};function z(e){var t=e.above,n=e.below,r=Object(m.a)(e,L),i=D((function(e){return e.preDefinedPythonCode})),a=D((function(e){return e.extraPythonCodeForTheBrowserRendering})),l=D((function(e){return e.setBlocklyPythonCode})),s=D((function(e){return e.setDownloadablePythonCode})),c=D((function(e){return e.blocklyXml})),d=D((function(e){return e.setBlocklyXml})),u=_(),p=Object(o.useCallback)((function(e){l(i+a+v.a.Python.workspaceToCode(e)),s(i+v.a.Python.workspaceToCode(e))}),[i,a,l,s]);return Object(R.jsxs)(W,{style:{height:M(u),width:"max(400px, calc(100vw - 32px - 14px))"},children:[t,Object(R.jsx)(J,Object(g.a)({workspaceConfiguration:{grid:{spacing:20,length:3,colour:"#ccc",snap:!0},collapse:!1,scrollbars:!0},initialXml:c,toolboxConfiguration:A,onWorkspaceChange:p,onXmlChange:d},r)),n]})}var G,X,U,W=s.b.div(S||(S=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n\n  .monaco-editor {\n    overflow: hidden;\n    border-radius: 8px;\n    ","\n  }\n"])),T.large),J=Object(s.b)(k.BlocklyWorkspace)(P||(P=Object(l.a)(["\n  width: 100%;\n  min-width: 400px;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 8px;\n\n  .blocklyScrollbarHorizontal.blocklyMainWorkspaceScrollbar,\n  .blocklyScrollbarVertical.blocklyMainWorkspaceScrollbar {\n    display: none;\n  }\n"]))),H=n(28),Q=n(358),K=s.b.button(G||(G=Object(l.a)(["\n  border: none;\n  border-radius: 4px;\n  background-color: #666;\n  color: #fff;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 16px;\n\n  :hover {\n    background-color: #444;\n  }\n"]))),Y=s.b.a(X||(X=Object(l.a)(["\n  border: none;\n  border-radius: 4px;\n  background-color: #666;\n  color: #fff;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 16px;\n\n  :hover {\n    background-color: #444;\n  }\n"]))),Z=n(37),q=n.n(Z);n(86),n(87);function $(e){var t=e.code,n=e.language,r=void 0===n?"python":n,i=Object(o.useState)(""),a=Object(h.a)(i,2),l=a[0],s=a[1];return Object(o.useEffect)((function(){s(q.a.highlight(t,q.a.languages[r],r))}),[t,r]),Object(R.jsx)(se,{children:Object(R.jsx)("code",{className:"language-"+r,dangerouslySetInnerHTML:{__html:l}})})}var ee,te,ne,oe,re,ie,ae,le,se=s.b.pre(U||(U=Object(l.a)(["\n  background-color: #1d1f21;\n  border-radius: 4px;\n\n  > code {\n    display: block;\n    padding: 10px 20px;\n\n    :empty {\n      display: none;\n    }\n  }\n"]))),ce=["#ffffff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#000000"];function de(e){var t=e.props,n=Object(o.useRef)(),r=Object(o.useRef)(),i=Object(o.useRef)(),a=D((function(e){return e.setCanvas})),l=D((function(e){return e.error})),s=D((function(e){return e.pythonErrorLineNumberOffset})),c=_(),d=D((function(e){return e.canvasColor})),u=D((function(e){return e.setCanvasColor})),p=Object(o.useState)(d),f=Object(h.a)(p,2),b=f[0],m=f[1],x=Object(Q.a)((function(e){return e}),100,[b]);Object(o.useEffect)((function(){u(x)}),[u,x]),Object(o.useEffect)((function(){null!==n.current&&(a(n.current),r.current=n.current.getContext("2d"))}),[a]),Object(o.useEffect)((function(){null!==n.current&&(r.current.fillStyle=d,r.current.fillRect(0,0,1600,1600))}),[d]);var j=function(){return Object(R.jsx)(xe,{children:Object(R.jsxs)(Y,{onClick:function(){if(i.current&&r.current){var e=i.current.children[1];if(!e)return;var t=e.width,o=e.height;n.current.width=t,n.current.height=o,r.current.fillStyle=d,r.current.fillRect(0,0,t,o);var a,l=!0,s=Object(H.a)(i.current.children);try{for(s.s();!(a=s.n()).done;){var c=a.value;l?l=!1:r.current.drawImage(c,0,0,t,o)}}catch(p){s.e(p)}finally{s.f()}var u=document.createElement("a");u.download="julekort.png",u.href=n.current.toDataURL("image/png;base64"),u.click(),r.current.fillStyle=d,r.current.fillRect(0,0,t,o)}},children:["Last ned bilde ",Object(R.jsx)("i",{className:"fas fa-download"})]})})};return Object(R.jsxs)(he,{fixedPosition:"L"===c,children:[Object(R.jsxs)(me,{children:[ce.map((function(e){return Object(R.jsx)(ke,{title:"Trykk for \xe5 sette bakgrunnen til denne fargen: ".concat(e),color:e,isSelected:e===d,onClick:function(){return m(e)}},e)})),Object(R.jsx)(je,{isSelected:!ce.includes(d||"#ffffff"),value:d||"#ffffff",onChange:function(e){return m(e.target.value)}})]}),Object(R.jsx)(ge,Object(g.a)({height:"1600px",width:"1600px",ref:n},t)),Object(R.jsx)(be,{id:"julekort-grafikk-turtle",ref:i}),Object(R.jsx)(be,{id:"julekort-grafikk-p5"}),Object(R.jsx)(j,{}),l&&Object(R.jsxs)(ye,{children:[Object(R.jsx)("h2",{children:"Du fikk en feilmelding \ud83d\ude2c"}),Object(R.jsxs)("h4",{children:["MEN det er ingen grunn til panikk!",Object(R.jsx)("br",{}),"Dette skjer hele tiden \ud83e\udd17"]}),Object(R.jsxs)("pre",{children:[l.type,": ",l.message]}),l.lineNumber&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("h4",{children:["Tips: Feilen ligger p\xe5 linje ",l.lineNumber-s," \ud83d\ude09:"]}),Object(R.jsx)($,{code:l.getNLinesAbove(2).join("\n")+"\n"+l.line+" # <- Se her \ud83e\uddd0\n"+l.getNLinesBelow(2).join("\n")})]})]})]})}var ue,pe,fe,he=s.b.div(ee||(ee=Object(l.a)(["\n  position: ",";\n  z-index: 999;\n  top: ",";\n  right: ",";\n  width: 400px;\n  height: 400px;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-top: 44px;\n  margin-bottom: 44px;\n  ","\n\n  canvas {\n    width: 400px !important;\n    height: 400px !important;\n  }\n\n  canvas + canvas {\n    margin-top: -400px !important;\n  }\n"])),(function(e){return e.fixedPosition?"absolute":"relative"}),(function(e){return e.fixedPosition?"51px":"unset"}),(function(e){return e.fixedPosition?"16px":"unset"}),T.large),be=s.b.div(te||(te=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 8px;\n"]))),ge=s.b.canvas(ne||(ne=Object(l.a)(["\n  border-radius: 8px;\n"]))),me=s.b.div(oe||(oe=Object(l.a)(["\n  position: absolute;\n  bottom: calc(100% + 8px);\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 8px;\n"]))),xe=s.b.div(re||(re=Object(l.a)(["\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 8px;\n"]))),je=s.b.input.attrs({type:"color"})(ie||(ie=Object(l.a)(["\n  background: ",";\n  appearance: none;\n  border: none;\n  border-radius: 8px;\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  margin-left: 30px;\n  border: 3px solid ",";\n  ","\n  cursor: pointer;\n\n  ::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n  ::-webkit-color-swatch {\n    border: none;\n  }\n"])),(function(e){return e.value}),(function(e){return e.isSelected?"black":"transparent"}),T.medium),ke=s.b.div(ae||(ae=Object(l.a)(["\n  width: 24px;\n  height: 24px;\n  background-color: ",";\n  opacity: ",";\n  border: 3px solid ",";\n  ","\n  border-radius: 8px;\n  cursor: pointer;\n"])),(function(e){return e.color}),(function(e){return e.isSelected?1:.75}),(function(e){return e.isSelected?"black":"transparent"}),T.medium),ye=s.b.div(le||(le=Object(l.a)(["\n  border-radius: 7px;\n  z-index: 999;\n  background: #000;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  font-family: monospace;\n  font-size: 16px;\n  text-align: left;\n\n  pre {\n    color: red;\n  }\n"])));function ve(){var e=D((function(e){return e.pythonCode})),t=D((function(e){return e.setPythonCode})),n=D((function(e){return e.preDefinedPythonCode})),r=D((function(e){return e.extraPythonCodeForTheBrowserRendering})),i=D((function(e){return e.blocklyPythonCode})),a=D((function(e){return e.downloadablePythonCode})),l=(D((function(e){return e.blocklyXml})),D((function(e){return e.addLog}))),s=Object(o.useState)(!1),c=Object(h.a)(s,2),d=c[0],u=c[1],g=D((function(e){return e.editorMode})),m=D((function(e){return e.editor})),x=D((function(e){return e.setEditorMode})),j=D((function(e){return e.setError})),k=D((function(e){return e.clearError})),y=D((function(e){return e.pythonErrorLineNumberOffset}));Object(o.useEffect)((function(){Object(b.c)({output:function(e){l(e),console.log(e)},error:null,onLoading:function(e){return u(e)},onLoaded:function(){u(!1)},loadVariablesBeforeRun:!0,storeVariablesAfterRun:!0}),Object(b.b)("skulpt","1.0.0")}),[l]);var v=function(e){var n=e.runCodeFunction;return Object(R.jsxs)(Se,{children:["python"===g&&Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(K,{onClick:function(){return x("blockly")},children:["G\xe5 tilbake til blokker ",Object(R.jsx)("i",{className:"fas fa-shapes"})]})}),"blockly"===g&&Object(R.jsxs)(K,{onClick:function(){x("python"),t(a)},children:["Gj\xf8r om til Python ",Object(R.jsx)("i",{className:"fas fa-code"})]}),"python"===g&&!1,"blockly"===g&&!1,Object(R.jsxs)(Pe,{onClick:n,children:["Kj\xf8r koden ",Object(R.jsx)("i",{className:"fas fa-play"})]})]})};return Object(R.jsxs)(Ce,{children:[Object(R.jsx)(de,{}),"python"===g?Object(R.jsx)(V,{language:"python",above:Object(R.jsx)(v,{runCodeFunction:Object(f.a)(p.a.mark((function t(){var o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)("skulpt","1.0.0");case 2:return k(),m&&window.monaco.editor.setModelMarkers("getModel"in m?m.getModel():m,"python-editor",[]),t.prev=4,t.next=7,Object(b.a)(n+r+e,{turtleGraphics:{target:"julekort-grafikk-turtle",width:1600,height:1600,assets:{"nisse-old-female":"/julekurs/nisse-old-female.png","nisse-old-male":"/julekurs/nisse-old-male.png"}}});case 7:t.next=14;break;case 9:t.prev=9,t.t0=t.catch(4),j(t.t0),console.error(t.t0),t.t0.lineNumber&&m&&(o=t.t0.lineNumber-y,window.monaco.editor.setModelMarkers("getModel"in m?m.getModel():m,"python-editor",[{startLineNumber:o,startColumn:0,endLineNumber:o+1,endColumn:0,message:t.t0.type+": "+t.t0.message,severity:3,source:""}]));case 14:case"end":return t.stop()}}),t,null,[[4,9]])})))})}):Object(R.jsx)(z,{above:Object(R.jsx)(v,{runCodeFunction:Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)("skulpt","1.0.0");case 2:return k(),e.prev=3,e.next=6,Object(b.a)(i,{turtleGraphics:{target:"julekort-grafikk-turtle",width:1600,height:1600,assets:{"nisse-old-female":"/julekurs/nisse-old-female.png","nisse-old-male":"/julekurs/nisse-old-male.png"}}});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),j(e.t0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))})}),d?"Laster inn Python (".concat(d,") ..."):""]})}var Oe,we,Ce=s.b.div(ue||(ue=Object(l.a)(["\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n"]))),Se=s.b.div(pe||(pe=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 8px;\n"]))),Pe=Object(s.b)(K)(fe||(fe=Object(l.a)(["\n  background-color: #080;\n  color: #fff;\n\n  :hover {\n    background-color: #060;\n  }\n"]))),Fe=n(59),Ee=n.n(Fe),Ie=n(38),Ne=n.n(Ie),De=(n(353),["children"]),Te=Ee()({langPrefix:"language-",highlight:function(e,t){if(t&&Ne.a.getLanguage(t))try{return Ne.a.highlight(e,{language:t}).value}catch(n){}return""}});function Re(){var e=Object(o.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){fetch("/julekurs/oppgaver/index.json").then((function(e){return e.json()})).then((function(e){r(e.oppgaver)}))}),[]),Object(R.jsx)(Ae,{children:n.map((function(e){return Object(R.jsx)(c.b,{to:"/oppgaver/"+e.id,children:e.tittel},e.id)}))})}function Be(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(d.f)().oppgaveId,a=void 0===i?null:i;return Object(o.useEffect)((function(){fetch("/julekurs"+"/oppgaver/".concat(a,".md")).then((function(e){return e.text()})).then((function(e){r(e)}))}),[a]),Object(R.jsx)(Ae,{children:Object(R.jsx)(Le,{children:n})})}function Le(e){var t=e.children,n=Object(m.a)(e,De),r=Object(o.useState)(""),i=Object(h.a)(r,2),a=i[0],l=i[1];return Object(o.useEffect)((function(){l(Te.render(t.replace(/\\n/g,"\n")))}),[t]),Object(R.jsx)(ze,Object(g.a)({dangerouslySetInnerHTML:{__html:a}},n))}var _e,Me,Ve,Ae=s.b.div(Oe||(Oe=Object(l.a)(["\n  text-align: center;\n  padding: 0 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),ze=s.b.div(we||(we=Object(l.a)(["\n  text-align: left;\n  width: 100%;\n  max-width: 640px;\n\n  img {\n    max-width: 100%;\n  }\n"])));var Ge=function(){return Object(R.jsx)(c.a,{children:Object(R.jsx)(Xe,{children:Object(R.jsx)(Ue,{children:Object(R.jsxs)(d.c,{children:[Object(R.jsxs)(d.a,{path:"/",exact:!0,children:[Object(R.jsx)("h1",{children:"Julekortverkstedet"}),Object(R.jsx)("p",{children:"Lyst til \xe5 programmere julekort? Da har du kommet til riktig sted!"}),Object(R.jsx)(c.b,{to:"/julekort",children:"Trykk her for \xe5 lage et julekort!"}),Object(R.jsx)(c.b,{to:"/oppgaver",children:"Finn ut hva du kan lage her!"})]}),Object(R.jsxs)(d.a,{path:"/julekort",children:[Object(R.jsx)(c.b,{to:"/",children:"G\xe5 tilbake til forsiden"}),Object(R.jsxs)(We,{onClick:function(){window.open(window.location.origin+"/julekurs#/oppgaver","_blank","toolbar=0,location=0,menubar=0")},children:[Object(R.jsx)("span",{style:{textDecoration:"underline"},children:"Finn ut hva du kan lage her!"})," ",Object(R.jsx)("i",{className:"fas fa-external-link-alt"})]}),Object(R.jsx)("h2",{children:"Lag ditt eget julekort"}),Object(R.jsx)(ve,{})]}),Object(R.jsxs)(d.a,{path:"/oppgaver",exact:!0,children:[Object(R.jsx)(c.b,{to:"/",children:"G\xe5 tilbake til forsiden"}),Object(R.jsx)("h2",{children:"Velg hva du vil lage"}),Object(R.jsx)(Re,{})]}),Object(R.jsxs)(d.a,{path:"/oppgaver/:oppgaveId",children:[Object(R.jsx)(c.b,{to:"/oppgaver",children:"G\xe5 tilbake til oppgavesiden"}),Object(R.jsx)("h2",{children:"Velg hva du vil lage"}),Object(R.jsx)(Be,{})]})]})})})})},Xe=s.b.div(_e||(_e=Object(l.a)(["\n  background-color: #4c1616;\n  text-align: center;\n  padding: 0 16px 16px;\n"]))),Ue=s.b.div(Me||(Me=Object(l.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),We=s.b.button(Ve||(Ve=Object(l.a)(["\n  color: #61dafb;\n  cursor: pointer;\n  background: none;\n  border: none;\n  font-size: calc(10px + 2vmin);\n"]))),Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(Ge,{})}),document.getElementById("root")),Je()},67:function(e,t,n){},87:function(e,t,n){}},[[357,1,2]]]);
//# sourceMappingURL=main.19342a35.chunk.js.map
import Blockly from 'blockly'
import 'blockly/python'
import * as Nb from 'blockly/msg/nb'

Blockly.setLocale(Nb)

Blockly.Blocks['speed'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(5, 'NUM')

    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('hastighet')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Endre hastigheten på avataren (0 er superraskt)')
  },
}

Blockly.Python['speed'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0'
  return `speed(${value})\n`
}

Blockly.Blocks['forward'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(100, 'NUM')

    this.appendValueInput('DISTANCE')
      .setCheck('Number')
      .appendField('fremover')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren fremover')
  },
}

Blockly.Python['forward'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `forward(${value})\n`
}

Blockly.Blocks['backward'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(100, 'NUM')

    this.appendValueInput('DISTANCE')
      .setCheck('Number')
      .appendField('bakover')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren bakover')
  },
}

Blockly.Python['backward'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `backward(${value})\n`
}

Blockly.Blocks['goto'] = {
  init: function () {
    const shadowX = this.workspace.newBlock('math_number')
    shadowX.setShadow(true)
    shadowX.setFieldValue(0, 'NUM')
    const shadowY = this.workspace.newBlock('math_number')
    shadowY.setShadow(true)
    shadowY.setFieldValue(0, 'NUM')

    this.appendDummyInput().appendField('gå til x:')
    this.appendValueInput('X').setCheck('Number').connection.connect(shadowX.outputConnection)
    this.appendDummyInput().appendField('y:')
    this.appendValueInput('Y').setCheck('Number').connection.connect(shadowY.outputConnection)
    this.appendDummyInput()

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren til en posisjon')
  },
}

Blockly.Python['goto'] = function (block) {
  const x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC) || '0'
  const y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC) || '0'
  return `goto(${x}, ${y})\n`
}

Blockly.Blocks['gotoRandom'] = {
  init: function () {
    this.appendDummyInput().appendField('gå til tilfeldig posisjon')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren til en tilfeldig posisjon på bildet')
  },
}

Blockly.Python['gotoRandom'] = function () {
  return `goto(int(400 * random() - 200), int(400 * random() - 200))\n`
}

Blockly.Blocks['circle'] = {
  init: function () {
    const shadowRadius = this.workspace.newBlock('math_number')
    shadowRadius.setShadow(true)
    shadowRadius.setFieldValue(100, 'NUM')
    const shadowAngle = this.workspace.newBlock('math_number')
    shadowAngle.setShadow(true)
    shadowAngle.setFieldValue(360, 'NUM')

    this.appendDummyInput().appendField('gå i sirkel')
    this.appendDummyInput().appendField('med klokka ↻').appendField(new Blockly.FieldCheckbox(true), 'DIRECTION')
    this.appendValueInput('RADIUS')
      .setCheck('Number')
      .appendField('radius:')
      .connection.connect(shadowRadius.outputConnection)
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('vinkel:')
      .connection.connect(shadowAngle.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren i en sirkel')
  },
}

Blockly.Python['circle'] = function (block) {
  const dir = block.getFieldValue('DIRECTION') === 'TRUE' ? -1 : 1
  const r = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC) || '0'
  const a = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `circle(${dir} * ${r}, ${a})\n`
}

Blockly.Blocks['right'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(90, 'NUM')

    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField('roter ↻')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Roter avataren antall grader til høyre (med klokka)')
  },
}

Blockly.Python['right'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC) || '0'
  return `right(${value})\n`
}

Blockly.Blocks['left'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(90, 'NUM')

    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField('roter ↺')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Roter avataren antall grader til venstre (mot klokka)')
  },
}

Blockly.Python['left'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC) || '0'
  return `left(${value})\n`
}

Blockly.Blocks['sideways'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(100, 'NUM')

    this.appendValueInput('DISTANCE')
      .setCheck('Number')
      .appendField('sidelengs')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren sidelengs')
  },
}

Blockly.Python['sideways'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `sideways(${value})\n`
}

Blockly.Blocks['color'] = {
  init: function () {
    this.appendDummyInput().appendField('sett farge').appendField(new Blockly.FieldColour('#ff0000'), 'COLOR')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skift farge på streken')
  },
}

Blockly.Python['color'] = function (block) {
  const value = block.getFieldValue('COLOR')
  return `color("${value}")\n`
}

Blockly.Blocks['randomColor'] = {
  init: function () {
    this.appendDummyInput().appendField('sett en tilfeldig farge')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skift farge på streken til en tilfeldig farge')
  },
}

Blockly.Python['randomColor'] = function () {
  return `color(random(), random(), random())\n`
}

Blockly.Blocks['penUp'] = {
  init: function () {
    this.appendDummyInput().appendField('ta opp pennen')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Ikke tegne mens avataren beveger seg')
  },
}

Blockly.Python['penUp'] = function () {
  return `up()\n`
}

Blockly.Blocks['penDown'] = {
  init: function () {
    this.appendDummyInput().appendField('ta ned pennen')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Tegne mens avataren beveger seg')
  },
}

Blockly.Python['penDown'] = function () {
  return `down()\n`
}

Blockly.Blocks['penSize'] = {
  init: function () {
    const shadow = this.workspace.newBlock('math_number')
    shadow.setShadow(true)
    shadow.setFieldValue(5, 'NUM')

    this.appendValueInput('SIZE')
      .setCheck('Number')
      .appendField('set penstørrelse til')
      .connection.connect(shadow.outputConnection)

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre størrelsen på pennen')
  },
}

Blockly.Python['penSize'] = function (block) {
  const size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC) || '1'
  return `pensize(${size} * scale)\n`
}

Blockly.Blocks['write'] = {
  init: function () {
    this.appendDummyInput().appendField('skriv').appendField(new Blockly.FieldTextInput('Hei'), 'TEXT')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skriv tekst på bildet')
  },
}

Blockly.Python['write'] = function (block) {
  const text = block.getFieldValue('TEXT')
  return `write("${text}", move=False, align=textalign, font=(fontname, fontsize, fonttype))\n`
}

Blockly.Blocks['fontsize'] = {
  init: function () {
    this.appendDummyInput().appendField('sett størrelse på tekst').appendField(new Blockly.FieldNumber(16), 'SIZE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre størrelse på teksten')
  },
}

Blockly.Python['fontsize'] = function (block) {
  const size = block.getFieldValue('SIZE')
  return `fontsize = ${size}\n`
}

Blockly.Blocks['fontname'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('velg font')
      .appendField(
        new Blockly.FieldDropdown([
          [{ src: process.env.PUBLIC_URL + '/helvetica.png', width: 100, height: 28, alt: 'Helvetica' }, 'Helvetica'],
          [
            { src: process.env.PUBLIC_URL + '/comic-sans-ms.png', width: 90, height: 28, alt: 'Comic Sans MS' },
            'Comic Sans MS',
          ],
          [
            { src: process.env.PUBLIC_URL + '/handwritten.png', width: 120, height: 28, alt: 'Monotype Corsiva' },
            'Monotype Corsiva',
          ],
          [{ src: process.env.PUBLIC_URL + '/monospace.png', width: 100, height: 28, alt: 'Monospace' }, 'Monospace'],
        ]),
        'NAME'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre hvilken type font som blir brukt')
  },
}

Blockly.Python['fontname'] = function (block) {
  const name = block.getFieldValue('NAME')
  return `fontname = "${name}"\n`
}

Blockly.Blocks['fonttype'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('velg fonttype')
      .appendField(
        new Blockly.FieldDropdown([
          [{ src: process.env.PUBLIC_URL + '/normal.png', width: 60, height: 24, alt: 'normal' }, 'normal'],
          [{ src: process.env.PUBLIC_URL + '/bold.png', width: 60, height: 24, alt: 'bold' }, 'bold'],
          [{ src: process.env.PUBLIC_URL + '/italic.png', width: 60, height: 24, alt: 'italic' }, 'italic'],
        ]),
        'TYPE'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre hvilken fonttype som blir brukt')
  },
}

Blockly.Python['fonttype'] = function (block) {
  const type = block.getFieldValue('TYPE')
  return `fonttype = "${type}"\n`
}

Blockly.Blocks['textalign'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('juster tekst til')
      .appendField(
        new Blockly.FieldDropdown([
          ['høyre ➡', 'left'],
          ['midten', 'center'],
          ['⬅ venstre', 'right'],
        ]),
        'ALIGN'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Velge hvor teksten blir skrevet i forhold til avataren')
  },
}

Blockly.Python['textalign'] = function (block) {
  const align = block.getFieldValue('ALIGN')
  return `textalign = "${align}"\n`
}

Blockly.Blocks['begin_fill'] = {
  init: function () {
    this.appendDummyInput().appendField('start fyll')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Start å fylle et område med farge')
  },
}

Blockly.Python['begin_fill'] = function () {
  return `begin_fill()\n`
}

Blockly.Blocks['end_fill'] = {
  init: function () {
    this.appendDummyInput().appendField('slutt fyll')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Slutt å fylle et område med farge')
  },
}

Blockly.Python['end_fill'] = function () {
  return `end_fill()\n`
}

Blockly.Blocks['hideturtle'] = {
  init: function () {
    this.appendDummyInput().appendField('skjul avatar 🙈')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Ikke vis avataren mens den tegner')
  },
}

Blockly.Python['hideturtle'] = function () {
  return `hideturtle()\n`
}

Blockly.Blocks['showturtle'] = {
  init: function () {
    this.appendDummyInput().appendField('vis avatar 🙉')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Vis avataren mens den tegner')
  },
}

Blockly.Python['showturtle'] = function () {
  return `showturtle()\n`
}

Blockly.Blocks['shape'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('endre avatar til')
      .appendField(
        new Blockly.FieldDropdown([
          ['🤶', 'nisse-old-female'],
          ['🎅', 'nisse-old-male'],
          ['🐢', 'turtle'],
          ['▶', 'triangle'],
          ['⚪', 'circle'],
          ['⬜', 'square'],
        ]),
        'SHAPE'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Endre avataren')
  },
}

Blockly.Python['shape'] = function (block) {
  const shape = block.getFieldValue('SHAPE')
  return `shape("${shape}")\n`
}

Blockly.Blocks['stamp'] = {
  init: function () {
    this.appendDummyInput().appendField('stemple avataren')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Stemple en kopi av avataren på tegningen på nåværende posisjon')
  },
}

Blockly.Python['stamp'] = function () {
  return `stamp()\n`
}

Blockly.Blocks['commentStart'] = {
  init: function () {
    this.appendDummyInput().appendField('deaktiver kode etter denne 🚫')

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(0)
    this.setTooltip('Legge til starten på en kommentar (brukes til å hoppe over kode)')
  },
}

Blockly.Python['commentStart'] = function () {
  return `"""\n`
}

Blockly.Blocks['commentEnd'] = {
  init: function () {
    this.appendDummyInput().appendField('aktiver koden etter denne ▶')

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(80)
    this.setTooltip('Legge til slutten på en kommentar (brukes til å fortsette å kjøre koden)')
  },
}

Blockly.Python['commentEnd'] = function () {
  return `#"""\n`
}

Blockly.Msg.MATH_CHANGE_TITLE = 'endre %1 med %2'
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = ''

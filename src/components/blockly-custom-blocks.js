import Blockly from 'blockly'
import 'blockly/python'

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
  return `pensize(${size} * 4)\n`
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

Blockly.Msg.CONTROLS_REPEAT_TITLE = 'gjenta %1 ganger'
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Kjør blokkene inne i denne blokken gjentatte ganger'
Blockly.Msg.MATH_CHANGE_TITLE = 'endre %1 med %2'
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = ''

Blockly.Msg.VARIABLES_SET = 'sett %1 til %2'
Blockly.Msg.NEW_VARIABLE_TITLE = 'Navn på den nye variabelen:'
Blockly.Msg.DELETE_VARIABLE = "Fjern '%1' variabelen"
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "Fjern %1 bruk av '%2' variabelen?"
Blockly.Msg.RENAME_VARIABLE = 'Endre navn på variabelen...'
Blockly.Msg.RENAME_VARIABLE_TITLE = "Endre navn på alle '%1' variabler til:"
